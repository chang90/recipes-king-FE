'use client';
import React, { useState } from 'react';
import styles from './carousel.module.scss';

interface PropsType {
  children: React.ReactNode;
}

const Carousel: React.FC<PropsType> = (props) => {
  const [activeSlice, setActiveSlice] = useState(0);
  const goBack = () => {
    setActiveSlice(() => activeSlice - 1);
  };

  const goForward = () => {
    setActiveSlice(() => activeSlice + 1);
  };

  return (
    <div
      className={styles['carousel']}
      style={{
        '--selected-slide': activeSlice,
      }}
    >
      <div className={styles['carousel__slides-container']}>
        <ul className={styles['carousel__slides']}>
          {React.Children.map(props.children, (child, key) => {
            return (
              <li className={styles['carousel__slide']} key={key}>
                {child}
              </li>
            );
          })}
        </ul>
      </div>
      <button onClick={goBack}>Back</button>
      <button onClick={goForward}>Forward</button>
    </div>
  );
};

export default Carousel;

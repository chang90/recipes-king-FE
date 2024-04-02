import React from 'react';
import styles from './carousel.module.scss';

interface PropsType {
  children: React.ReactNode;
}

const Carousel: React.FC<PropsType> = (props) => {
  return (
    <div className={styles['carousel']}>
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
    </div>
  );
};

export default Carousel;

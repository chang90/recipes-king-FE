import React from "react";
import styles from "./carousel.module.scss";

interface PropsType {
  children: React.ReactNode;
}

const Carousel: React.FC<PropsType> = (props) => {
  return (
    <ul className={styles["carousel"]}>
      {React.Children.map(props.children, (child, key) => {
        return (
          <li className={styles["carousel__item"]} key={key}>
            {child}
          </li>
        );
      })}
    </ul>
  );
};

export default Carousel;

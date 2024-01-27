import React from "react";
import styles from "./cardList.module.scss";

interface PropsType {
  children: React.ReactNode;
}

const CardList: React.FC<PropsType> = (props) => {
  return (
    <ul className={styles["card-list"]}>
      {React.Children.map(props.children, (child, key) => {
        return <li className={styles["card-list__item"]} key={key}>{child}</li>
      })}
    </ul>
  );
}

export default CardList
import React from "react";
import styles from "./cardList.module.scss";

interface PropsType {
  children: React.ReactNode;
}

const CardList: React.FC<PropsType> = (props) => {
  return (
    <ul className={styles["card-list"]}>
      {React.Children.map(props.children, (child, key) => {
        return <li key={key}>{child}</li>
      })}
    </ul>
  );
}

export default CardList
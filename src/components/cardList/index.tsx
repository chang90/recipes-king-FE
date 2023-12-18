import React from "react";

interface PropsType {
  children: React.ReactNode;
}

const CardList: React.FC<PropsType> = (props) => {
  return (
    <ul>
      {React.Children.map(props.children, (child, key) => {
        return <li key={key}>{child}</li>
      })}
    </ul>
  );
}

export default CardList
import Image from "next/image";
import React from "react";
import styles from "./card.module.scss";

type Image = {
  src: string;
  alt: string;
}

interface CardProps {
  title: string;
  description: string;
  image: Image;
}

const Card: React.FC<CardProps> = ({ title, description, image }) => {
  return (
    <div className={styles.wrapper}>
      <h2>{title}</h2>
      <p>{description}</p>
      <div className={styles.picture}>
        <Image
        src={image.src}
        alt={image?.alt || "Image"}
        layout='fill' />
      </div>
    </div>
  )
}

export default Card;
import Image from "next/image";
import React from "react";

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
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
      <Image
        src={image.src}
        alt={image?.alt || "Image"}
        layout='fill' />
    </div>
  )
}

export default Card;
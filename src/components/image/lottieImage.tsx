"use client"; 
import Image from "next/image";
import { useLottie } from "lottie-react";
import React from "react";

type ImageDetails = {
  src?: string;
  lottie?: Object;
  alt: string;
}

interface ImageProps {
  title: string;
  description: string;
  image: ImageDetails;
}

const LottieImage: React.FC<ImageProps> = ({ title, description, image }) => {
  const options = {
    animationData: image?.lottie,
    loop: true
  };

  const { View } = useLottie(options);
  return (
        image.src ?
        <Image
        src={image.src}
        alt={image?.alt || "Image"}
        layout='fill' /> :
        <>{View}</>
  )
}

export default LottieImage;
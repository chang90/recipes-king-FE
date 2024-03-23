'use client';
import { DotLottiePlayer, Controls } from '@dotlottie/react-player';
import '@dotlottie/react-player/dist/index.css';
import React from 'react';

type ImageDetails = {
  src?: string;
  lottie?: Object;
  alt: string;
};

interface ImageProps {
  title: string;
  description: string;
  image: ImageDetails;
}

const LottieImage: React.FC<ImageProps> = ({ title, description, image }) => {
  const options = {
    animationData: image?.lottie,
    loop: true,
  };

  return (
    <DotLottiePlayer src={image?.src || ''} autoplay loop>
      <Controls />
    </DotLottiePlayer>
  );
};

export default LottieImage;

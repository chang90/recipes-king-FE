import Image from 'next/image';
import React from 'react';
import styles from './card.module.scss';
import { Image as Imagetype } from '@/types';

interface CardProps {
  title: string;
  description?: string;
  image?: Imagetype | null;
  children?: React.ReactNode;
}

const Card = ({
  title = '',
  description = '',
  image = null,
  children = null,
}: CardProps) => {
  return (
    <div className={styles.wrapper}>
      <h2>{title}</h2>
      <p>{description}</p>
      <div className={styles.picture}>
        {image && <Image src={image.src} alt={image?.alt || 'Image'} fill />}
      </div>
      {children}
    </div>
  );
};

export default Card;

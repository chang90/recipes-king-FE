"use client"; 
import Image from 'next/image'
import styles from './page.module.css'
import { useLottie } from "lottie-react";
import animation from "./animation.json";

export default function Home() {
  const options = {
    animationData: animation,
    loop: true
  };

  const { View } = useLottie(options);
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Hello world
        </p>
        <>{View}</>
      </div>
    </main>
  )
}

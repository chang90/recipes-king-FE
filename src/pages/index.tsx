"use client"; 
import styles from './page.module.css'
import { useLottie } from "lottie-react";
import animation from "@/asset/animation.json";

export default function Page() {
  const options = {
    animationData: animation,
    loop: true
  };

  const { View } = useLottie(options);
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <>{View}</>
      </div>
    </main>
  )
}

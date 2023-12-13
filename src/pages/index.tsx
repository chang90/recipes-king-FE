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
        <div className={styles.wrapper}>
          <div className={`${styles.box} ${styles.a}`}>A</div>
          <div className={`${styles.box} ${styles.b}`}>B</div>
          <div className={`${styles.box} ${styles.c}`}>C</div>
          <div className={`${styles.box} ${styles.d}`}>
            <div className={`${styles.box} ${styles.e}`}>E</div>
            <div className={`${styles.box} ${styles.f}`}>F</div>
            <div className={`${styles.box} ${styles.g}`}>G</div>
          </div>
      </div>
      <div className={styles.description}>
        <>{View}</>
      </div>
    </main>
  )
}

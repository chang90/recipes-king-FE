"use client"; 
import styles from './page.module.scss'
import { useLottie } from "lottie-react";
import animation from "@/asset/animation.json";
import CardList from '@/components/cardList';
import Card from '@/components/card/card';

export default function Page() {
  const options = {
    animationData: animation,
    loop: true
  };

  const { View } = useLottie(options);
  return (
    <main className={styles.main}>
      <CardList>
        <Card 
          title='菠菜汤'
          description='菠菜 + 海米 + 水'
          image={{
            src: "https://placehold.co/600x400/EEE/31343C",
            alt: "菠菜汤"
          }}
        />
      </CardList>
      <div className={styles.description}>
        <>{View}</>
      </div>
    </main>
  )
}

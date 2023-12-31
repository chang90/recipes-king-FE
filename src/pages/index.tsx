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
            src: "https://placehold.co/30x30/EEE/31343C",
            alt: "菠菜汤"
          }}
        />
        <Card 
          title='牛肉饭'
          description='牛肉 + 料酒 + 水 + 洋葱 + 味霖'
          image={{
            src: "https://placehold.co/30x30/ABC/31343C",
            alt: "牛肉饭"
          }}
        />
      </CardList>
      <div className={styles.description}>
        <>{View}</>
      </div>
    </main>
  )
}

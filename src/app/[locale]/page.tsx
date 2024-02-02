import styles from './page.module.scss'
// import { useLottie } from "lottie-react";
import animation from "@/asset/animation.json";
import CardList from '@/components/cardList';
import Card from '@/components/card/card';
import Link from 'next/link';
import LottieImage from '@/components/image/lottieImage';

export default function Page() {
  return (
    <main className={styles.main}>
      <Link href="/menu/1" replace>Menu</Link>
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
        <Card 
          title='炒饭'
          description='鸡蛋 + 培根 + 米 + 油'
          image={{
            src: "https://placehold.co/30x30/ABC/31343C",
            alt: "炒饭"
          }}
        />
        <Card 
          title='茶叶蛋'
          description='茶叶 + 鸡蛋 + 酱油'
          image={{
            src: "https://placehold.co/30x30/ABC/31343C",
            alt: "茶叶蛋"
          }}
        />
      </CardList>
      <div className={styles.description}>
        <LottieImage title="lottie" description='this is an image' image={{lottie:animation, alt:'lottie'}} />
      </div>
    </main>
  )
}

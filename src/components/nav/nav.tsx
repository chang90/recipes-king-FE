import Image from "next/image";
import React from "react";
import styles from "./nav.module.scss";
import { Image as ImageType } from "@/types";

type Content = {
  url: string;
  content: Content[];
}

interface NavProps {
  logo: ImageType;
  content: Content[];
}

const Nav: React.FC<NavProps> = ({ logo, content }) => {
  return (
    <div className={styles.wrapper}>
      <Image
        width={30}
        height={40}
        src={logo?.src}
        alt={logo?.alt || "Image"}/>
    </div>
  )
}

export default Nav;
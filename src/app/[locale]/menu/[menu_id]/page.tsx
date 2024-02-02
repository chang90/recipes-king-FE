import { Metadata } from "next";
import Link from "next/link";
export const generateMetadata = ({ params }: Props): Metadata => {
  return {
    title: `Menu ${params.menu_id}`
  }
}

type Props = {
  params: {
    menu_id: string;
  }
}

export default function Menu({params}: Props) {
  return (
    <>
      <h1>Menu {params.menu_id}</h1>
      <Link href="/">Home</Link>
    </>
  )
}
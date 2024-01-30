import { Metadata } from "next";
export const generateMetadata = ({ params }: Props): Metadata => {
  return {
    title: `Menu ${params.productId}`
  }
}

type Props = {
  params: {
    productId: string;
  }
}

export default function Menu({params}: Props) {
  return (
    <h1>Menu {params.productId}</h1>
  )
}
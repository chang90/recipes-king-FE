"use client"
function getRandomInt(count:number) {
  return Math.floor(Math.random() * count);
}

export default function ReviewDetail({
  params,
}: {
  params: {}
}) {
  const random = getRandomInt(2);
  console.log(random)

  if(random === 1) {
    throw new Error("Error loading review");
  }
}
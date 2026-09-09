import Image from "next/image"
import brain from "@/assets/brain.svg"

export default function Brain() {
  return <Image src={brain} alt="brain" priority className="h-20 md:h-auto" />
}
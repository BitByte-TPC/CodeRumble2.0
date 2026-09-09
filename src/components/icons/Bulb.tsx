import Image from "next/image"
import gear from "@/assets/gear.svg"

export default function Gear() {
  return <Image src={gear} alt="gear" priority className="h-20 md:h-auto" />
}
import Image from 'next/image'
import cup from '@/assets/cup.svg'
import cup2 from '@/assets/cup2.svg'
import first from '@/assets/first.svg'
import second from '@/assets/second.svg'
import third from '@/assets/third.svg'

export default function Prizes() {
  return (
    <div className="min-h-screen relative overflow-hidden">

      {/* Content container */}
      <div className="container mx-auto px-4 py-8 flex flex-col items-center justify-center min-h-screen">
        {/* Headline */}
        <h1 className="text-white font-cocogoose lg:text-2xl text-3xl md:text-[44px] text-center mb-16 lg:mb-24">
          Now, the PRIZES!!
        </h1>
        
        {/* Bars and cups container */}
        <div className="relative w-full max-w-6xl">
          {/* Trophy cups - aligned at same level */}
          <div className="absolute lg:-top-20 -top-10 left-2 lg:left-16 z-10 w-16 lg:w-30">
            <Image
              src={cup}
              alt="First place trophy"
              className="drop-shadow-lg w-full"
              style={{ transform: 'rotate(-20deg)' }}
            />
          </div>
          
          <div className="absolute -top-10 right-1 lg:right-16 z-10 w-18 lg:w-30">
            <Image
              src={cup2}
              alt="Third place trophy"
              
              className="drop-shadow-lg w-full"
              style={{ transform: 'rotate(18deg)' }}
            />
          </div>
          
          <div className="flex items-end justify-center gap-2 lg:gap-12">
            {/* Left bar - Rs 5000 (second place) */}
            <div className="relative flex flex-col items-center">
                <span className="text-white font-mabry font-bold text-2xl lg:text-3xl whitespace-nowrap">Rs 6000</span>
              <Image
                src={first || "/placeholder.svg"}
                alt="Second place bar - Rs 5000"
                width={120}
                height={300}
                className="w-24 h-72 lg:w-50 lg:h-80 object-cover"
              />
            </div>

            {/* Middle bar - Rs 8000 (first place - tallest) */}
            <div className="relative flex flex-col items-center">
                <span className="text-white font-mabry font-bold text-3xl lg:text-3xl whitespace-nowrap">Rs 10000</span>
              <Image
                src={second || "/placeholder.svg"}
                alt="First place bar - Rs 8000"
                width={120}
                height={400}
                className="w-24 h-96 lg:w-50 lg:h-[28rem] object-cover"
                priority
              />
            </div>

            {/* Right bar - Rs 3000 (third place - shortest) */}
            <div className="relative flex flex-col items-center">
                <span className="text-white font-mabry font-bold text-xl lg:text-3xl whitespace-nowrap">Rs 4000</span>
             
              <Image
                src={third || "/placeholder.svg"}
                alt="Third place bar - Rs 3000"
                width={120}
                height={250}
                className="w-24 h-60 lg:w-50 lg:h-72 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
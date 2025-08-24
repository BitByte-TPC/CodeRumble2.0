import coderumble_white from '@/assets/coderumble_white.svg'
import tpc_logo from '@/assets/tpc_logo.svg'
import three from '@/assets/three.svg'
import Image from 'next/image';

export default function Main() {
	return (
		<div className="min-h-screen relative flex flex-col justify-center items-center">
			<div className='gap-10 w-[70%] flex justify-center h-44 mb-14'>
				<Image
					className='w-[80%]'
					src={coderumble_white}
					alt="Coderumble"
					priority
				/>
				<div className='flex w-[20%] flex-col h-full justify-between px-5'>
					<div className='bg-white h-7 w-full'></div>
					<Image
						className='self-center'
						src={three}
						alt="Coderumble"
						priority
					/>
					<div className='bg-white h-7 w-full'></div>
				</div>
			</div>

			<div className="absolute bottom-0 w-full flex flex-col items-center">
				<div className='mb-4'>
					<button className='font-mabry rounded-full text-4xl bg-blue-600 text-lime-400 border-4 border-lime-400 px-12 py-4 hover:bg-blue-700 transition-colors'>
						Register!
					</button>
				</div>

				<div className="w-full grid grid-cols-3 items-center h-fit px-18 py-5">
					<div className="flex justify-start">
						<Image
							src={tpc_logo}
							alt="TPC Logo"
							className="h-16"
						/>
					</div>

					<div className="text-white text-center">
						<div className="text-lg font-bold">Date</div>
					</div>

					<div className="text-white flex justify-end pr-2">
						<div className="text-lg font-bold">socials</div>
					</div>
				</div>
			</div>
		</div>
	);
}

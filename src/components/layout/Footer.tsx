import Link from "next/link"
import mail from "@/assets/mail.svg"
import phone from "@/assets/phone.svg"
import location from "@/assets/location.svg"
import Image from "next/image"
import coderumble_logo from '@/assets/coderumble_logo.svg'

export default function Footer() {
	return (
		<div className="relative bg-secondary flex justify-center py-16 md:py-18">
			{/* Centered logo overlapping */}
			<div className="absolute -top-12 md:-top-19 left-1/2 -translate-x-1/2">
				<Image
					src={coderumble_logo}
					alt="Coderumble Logo"
					className="w-24 h-24 md:w-40 md:h-40"
					priority
				/>
			</div>

			{/* Main Content */}
			<div className="w-full md:w-[60%] flex flex-col gap-6 md:gap-10 px-4 md:px-24 pt-8 md:pt-0">

				{/* Mail */}
				<Link
					href="mailto:theprogclub@iiitdmj.ac.in"
					className="flex flex-col font-mabry gap-1 md:gap-2 py-2 cursor-pointer"
				>
					<Image
						className="h-6 w-6 md:h-9 md:w-9"
						src={mail}
						alt="Mail Icon"
						priority
					/>
					<p className="text-lg md:text-2xl font-extrabold opacity-60">
						Mail us at
					</p>
					<div className="text-sm md:text-base font-extrabold underline break-all">
						theprogclub@iiitdmj.ac.in
					</div>
				</Link>

				{/* Phone Numbers */}
				<div className="w-full flex flex-col md:flex-row md:justify-between gap-6 md:gap-8">
					<div className="flex flex-col font-mabry gap-1 md:gap-2 py-2">
						<Image
							className="h-6 w-6 md:h-9 md:w-9 mb-2 md:mb-6"
							src={phone}
							alt="Phone Icon"
							priority
						/>
						<p className="text-lg md:text-2xl font-extrabold">
							Mariam Eqbal
						</p>
						<a href="tel:+917980445877" className="text-lg md:text-2xl font-extrabold hover:underline">
							+91 79804 45877
						</a>
					</div>
					<div className="flex flex-col font-mabry gap-1 md:gap-2 py-2">
						<Image
							className="h-6 w-6 md:h-9 md:w-9 mb-2 md:mb-6"
							src={phone}
							alt="Phone Icon"
							priority
						/>
						<p className="text-lg md:text-2xl font-extrabold">
							Suseel Kumar
						</p>
						<a href="tel:+917989052908" className="text-lg md:text-2xl font-extrabold hover:underline">
							+91 79890 52908
						</a>
					</div>
				</div>

				{/* Location */}
				<div className="flex flex-col font-mabry gap-2 md:gap-3 py-2">
					<Image
						className="h-6 w-6 md:h-9 md:w-9 mb-2 md:mb-4"
						src={location}
						alt="Location Icon"
						priority
					/>
					<div className="text-sm md:text-base font-extrabold w-full md:w-[50%] leading-relaxed">
						Pandit Dwarka Prasad Mishra Indian Institute of
						Information Technology, Design and Manufacturing,
						Dumna Airport Road, Post Khamaria,
						Jabalpur - 482005, Madhya Pradesh, India.
					</div>
					<a
						href="https://maps.app.goo.gl/iLZSmorQqXaBKCJE9"
						target="_blank"
						rel="noopener noreferrer"
						className="text-sm md:text-lg font-extrabold opacity-60 hover:underline cursor-pointer"
					>
						Click here to view on the map
					</a>
				</div>
			</div>
		</div>
	)
}

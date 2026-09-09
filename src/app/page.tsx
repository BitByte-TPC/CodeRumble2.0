import ClientWrapper from "@/components/ClientWrapper"
import Hero from "@/components/sections/Hero"
import PunchCardStrip from "@/components/sections/PunchCardStrip"
import About from "@/components/sections/About"
import Footer from "@/components/sections/Footer"

export const metadata = {
  metadataBase: new URL("https://www.code-rumble.in"),
  title: "Coderumble",
  description: "Coderumble by The Programming Club, IIITDM Jabalpur.",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Coderumble",
    description: "Coderumble by The Programming Club, IIITDM Jabalpur.",
    url: "https://www.code-rumble.in/",
    siteName: "Coderumble",
    images: [
      {
        url: "/meta.png",
        width: 1200,
        height: 630,
        alt: "Coderumble Banner",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Coderumble",
    description: "Coderumble by The Programming Club, IIITDM Jabalpur.",
    images: ["/meta.png"],
  },
}

export default function Home() {
  return (
    <ClientWrapper>
      <Hero />
      <PunchCardStrip />
      <About/>
      <Footer />
    </ClientWrapper>
  )
}

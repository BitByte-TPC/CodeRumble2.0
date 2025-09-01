import About from "@/components/sections/About"
import Main from "@/components/sections/Main"
import Footer from "@/components/layout/Footer"
import Prizes from "@/components/Prizes"
import ClientWrapper from "@/components/ClientWrapper"

export const metadata = {
  metadataBase: new URL("https://www.code-rumble.in"),
  title: "Coderumble 3.0",
  description: "Event Date: 27th Sept 2025. Let the code speak!",
  openGraph: {
    title: "Coderumble 3.0",
    description: "Event Date: 27th Sept 2025. Let the code speak!",
    url: "https://www.code-rumble.in/",
    siteName: "Coderumble",
    images: [
      {
        url: "/meta.png", 
        width: 1200,
        height: 630,
        alt: "Coderumble 3.0 Banner",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Coderumble 3.0",
    description: "Event Date: 27th Sept 2025. Let the code speak!",
    images: ["/meta.png"],
  },
}

export default function Home() {
  return (
    <ClientWrapper>
      <div>
        <section id="home" className="min-h-screen">
          <Main />
        </section>
        <section id="about" className="min-h-screen">
          <About />
        </section>
        <section id="prizes" className="min-h-screen">
          <Prizes />
        </section>
        <section id="contact">
          <Footer />
        </section>
      </div>
    </ClientWrapper>
  )
}

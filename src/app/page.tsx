import ClientWrapper from "@/components/ClientWrapper"
import Nav from "@/components/sections/Nav"
import Hero from "@/components/sections/Hero"
import PunchCardStrip from "@/components/sections/PunchCardStrip"
import About from "@/components/sections/About"
import PastMemories from "@/components/sections/PastMemories"
import PrizePool from "@/components/sections/PrizePool"
import Footer from "@/components/sections/Footer"

// The poster, top to bottom. Metadata for the route lives in the root layout,
// since there is only the one page.
export default function Home() {
  return (
    <ClientWrapper>
      <Nav />
      <Hero />
      <PunchCardStrip />
      <About />
      <PastMemories />
      <PrizePool />
      <Footer />
    </ClientWrapper>
  )
}

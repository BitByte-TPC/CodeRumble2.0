import { Navbar, Footer } from "../components";
import { Hero, About, Perks, Gallery } from "../sections";

const Page = () => (
  <div className="mx-6 overflow-x-hidden">
    <Hero />
    <About />
    <Perks />
    <Gallery />
    <Footer />
  </div>
);
export default Page;

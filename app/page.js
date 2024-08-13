import { Navbar, Footer } from "../components";
import { Hero, About, Perks } from "../sections";

const Page = () => (
  <div className="mx-6 overflow-x-hidden">
    <Hero />
    <About />
    <Perks />
    <Footer />
  </div>
);
export default Page;

import Image from "next/image";
import {Hero} from '../sections';
import {Navbar, Footer, HeroFooter, About} from '../components';
const Page =()=>(
  <div className="mx-4 md:mx-10">
    <Navbar/>
    <Hero/>
    <HeroFooter/>
    <About/>
    {/* <Footer/> */}
  </div>
);
export default Page;

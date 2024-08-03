import {Navbar, Footer, HeroFooter} from '../components';
import {Hero, About, Perks} from '../sections';
const Page =()=>(
  <div className="mx-2 md:mx-6">
    <Navbar/>
    <Hero/>
    {/* <HeroFooter/> */}
    <About/>
    <Perks/>
    {/* <Footer/> */}
  </div>
);
export default Page;

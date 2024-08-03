import {Navbar, Footer, HeroFooter} from '../components';
import {Hero, About} from '../sections';
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

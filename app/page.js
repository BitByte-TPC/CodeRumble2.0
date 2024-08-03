import {Navbar} from '../components';
import {Hero, About, Perks} from '../sections';
const Page =()=>(
  <div className="mx-6">
    <Navbar/>
    <Hero/>
    <About/>
    <Perks/>
  </div>
);
export default Page;

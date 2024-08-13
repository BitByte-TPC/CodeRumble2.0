import { BsInstagram, BsTwitterX } from "react-icons/bs";
import { TbMail } from "react-icons/tb";

const HeroFooter = () => (
  <>
    <footer className="flex justify-center">
      <div className="container flex justify-between items-center">
        <div className="flex gap-3 sm:gap-4 md:gap-10 pb-1 sm:pb-0">
          <a href="https://www.instagram.com/bitbyte.tpc/">
            <BsInstagram size={25} />
          </a>
          <a href="https://x.com/BitByte_IIITDMJ">
            <BsTwitterX size={25} />
          </a>
          <a href="mailto:theprogclub@iiitdmj.ac.in">
            <TbMail size={25} />
          </a>
        </div>
      </div>
    </footer>
  </>
);

export default HeroFooter;

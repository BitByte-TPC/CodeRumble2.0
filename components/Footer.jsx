import Socials from "./Socials";

const Footer = () => (
  <>
    <div className="grid grid-cols-3 grid-rows-3 gap-0 grid-flow-row h-full">
      <div className="socials flex justify-start">
        <Socials />
      </div>
      <div className="cp flex items-center justify-center">
        <span className="text-[#FFFFFF80] text-base md:text-xl ">
          Copyright &copy; 2024 CodeRumble 2.0 All rights reserved
        </span>
      </div>
      <div className="empty flex items-center justify-center"></div>
    </div>
  </>
);

export default Footer;

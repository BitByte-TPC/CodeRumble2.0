import Socials from "./Socials";

const Footer = () => (
  <>
    <div className="flex flex-col justify-center align-middle md:grid md:grid-cols-3 md:grid-rows-2 2xl:grid-rows-2 gap-3 md:gap-0 pb-5 md:pb-0 grid-flow-row h-full">
      <div className="socials flex justify-start mx-auto md:mx-0">
        <Socials />
      </div>
      <div className="cp flex items-center justify-center">
        <span className="text-[#FFFFFF80] text-base lg:text-xl text-center">
          Copyright &copy; 2024 CodeRumble 2.0 All rights reserved
        </span>
      </div>
    </div>
  </>
);

export default Footer;

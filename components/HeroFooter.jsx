import Socials from "./Socials";

const HeroFooter = () => (
  <>
    <div className="grid grid-cols-3 auto-rows-min gap-0 grid-flow-row h-full">
      <div className="socials flex justify-start items-end">
        <Socials />
      </div>
      <div className="cp flex items-center justify-center"></div>
      <div className="empty flex items-center justify-end">
        <div className="flex-col text-right">
          <p className="text-3xl xs:text-4xl md:text-6xl font-bold">20th</p>
          <p className="text-base xs:text-xl md:text-4xl font-bold">
            October
          </p>
        </div>
      </div>
    </div>
  </>
);

export default HeroFooter;

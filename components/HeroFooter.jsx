import Socials from "./Socials"

const HeroFooter = () => (
  <>
    <div className="grid grid-cols-3 auto-rows-min gap-0 grid-flow-row h-full">
      <div className="socials flex justify-start items-end">
        <Socials />
      </div>
      <div className="cp flex items-center justify-center"></div>
      <div className="empty flex items-center justify-end">
        <div className="flex-col text-right">
          <p className="text-base xs:text-xl md:text-2xl font-bold">
            Dates will be
          </p>
          <p className="text-base xs:text-xl md:text-2xl font-bold">
            revealed soon!
          </p>
        </div>
      </div>
    </div>
  </>
)

export default HeroFooter

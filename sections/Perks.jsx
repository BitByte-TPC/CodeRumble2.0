import { PerksCard } from "../components";
export default function Perks() {
  const head1 = "REASON #1";
  const text1 = "Sharpen coding skills in an ICPC Mock Regional environment";
  const head2 = "REASON #2";
  const text2 = "Thrive in healthy competition with like-minded peers";
  const head3 = "REASON #3";
  const text3 = "Gain insights from ICPC world finalists as guest speakers";

  return (
    <div className="flex justify-center items-center my-20 md:my-0 min-h-screen mr-4 ml-4">
      <div className="container flex flex-col items-center gap-10 md:gap-20 justify-between">
        <h1 className="text-[2rem] md:text-[3.5rem] lg:text-[5vw] 2k:text-9xl font-extrabold text-center w-[100%]">
          Why Participate though?
        </h1>
        <div className="flex flex-col md:flex-row gap-[1.5rem] md:gap-[2rem] lg:gap-[3rem] md:my-[5rem]  ">
          <div className="flex flex-row md:flex-col  items-center md:mt-10">
            <PerksCard head={head1} text={text1} />
          </div>
          <div className="flex flex-row md:flex-col items-center md:mt-20">
            <p className="text-sm md:text-2xl text-[#FFFFFF80]  mt-10 mb-14 mr-3 md:mr-0 tracking-[0.5em] md:font-bold">
              PERKS
            </p>
            <PerksCard head={head2} text={text2} />
          </div>
          <div className="flex flex-row md:flex-col items-center md:mt-10">
            <PerksCard head={head3} text={text3} />
          </div>
        </div>
      </div>
    </div>
  );
}

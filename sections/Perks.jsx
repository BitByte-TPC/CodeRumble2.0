import PerksCard from "../components/PerksCard";
export default function Perks() {
    const head1 = "REASON #1";
    const text1 = "Sharpen coding skills in an ICPC Mock Regional environment";
    const head2 = "REASON #2";
    const text2 = "Thrive in healthy competition with like-minded peers";
    const head3 = "REASON #3";
    const text3 = "Gain insights from ICPC world finalists as guest speakers";
    return (
        <div className="flex justify-center items-center my-20 md:my-0 min-h-screen">
            <div className="container flex flex-col items-center gap-10 md:gap-20 justify-between">
                <h1 className="text-6xl md:text-8xl 2k:text-9xl md:font-extrabold">Why Participate though?</h1>
                <div className="flex flex-col md:flex-row md:gap-20 md:my-[10vh]">
                    <PerksCard head={head1} text={text1} />
                    <div className="flex flex-row md:flex-col gap-7 md:gap-10 items-center md:mt-10">
                        <p className="text-sm md:text-2xl text-[#FFFFFF80] mt-2 mb-3 tracking-[0.5em] md:font-bold">PERKS</p>
                        <PerksCard head={head2} text={text2} />
                    </div>
                    <PerksCard head={head3} text={text3} />
                </div>
            </div>
        </div>
    );
}
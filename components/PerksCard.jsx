export default function PerksCard({head, text}) {
    return(
        <div className="flex flex-col gap-10 bg-[#FFFFFF1A] p-7 md:p-10 rounded-3xl md:rounded-[2.5rem] pr-5 md:pr-32 md:h-80 w-48 md:w-[33.5rem] my-5 md:mb-0">
                <h1 className="text-xs md:text-xl font-bold tracking-[0.4rem] md:tracking-[1rem] text-[#FFFFFF80] md:py-2">{head}</h1>
                <p className=" text-base md:text-[1.7rem] font-bold leading-relaxed">{text}</p>
        </div>
    );
}
export default function PerksCard({head, text}) {
    return(
        <div className="flex flex-col gap-10  bg-[#FFFFFF1A] p-10 rounded-[2.5rem] pr-32 h-80 min-w-[33.5rem] max-w-[33.5rem]">
                <h1 className="text-xl font-bold tracking-[1rem] text-[#FFFFFF80] py-2">{head}</h1>
                <p className="text-[1.7rem] font-bold leading-relaxed">{text}</p>
        </div>
    );
}
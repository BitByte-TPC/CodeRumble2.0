export default function PerksCard({ head, text }) {
  return (
    <div className="flex flex-col gap-10 bg-[#FFFFFF1A] rounded-3xl md:rounded-[2.5rem] p-7 md:p-8 xl:p-10 md:pr-15 lg:pr-15 xl:pr-32 md:h-80 w-48 md:w-[100%]  md:mb-0">
      <h1 className="text-xs md:text-lg xl:text-xl font-bold tracking-[0.4rem] md:tracking-[0.7rem] text-[#FFFFFF80]">
        {head}
      </h1>
      <p className=" text-base md:text-[1.1rem] xl:text-[1.5rem] font-bold leading-relaxed">
        {text}
      </p>
    </div>
  );
}

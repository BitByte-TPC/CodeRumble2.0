const HeroFooter = () => (
    <>
        <footer className=" flex justify-center">
            <div className="md:w-full md:max-w-none px-4 md:px-8 container flex justify-between items-end">
                <div className="flex gap-3 sm:gap-4 md:gap-10 pb-1 sm:pb-0">
                    <img src="./insta.png" alt="insta" className="size-6 md:size-8 2k:size-10"/>
                    <img src="./twitter.png" alt="twitter" className="size-6 md:size-8 2k:size-10" />
                    <img src="./mail.png" alt="mail" className="size-6 md:size-8 2k:size-10"/>
                </div>
                <div className="flex-col text-right">
                    <p className="text-3xl xs:text-4xl md:text-6xl font-bold">8th</p>
                    <p className="text-base xs:text-xl md:text-4xl font-bold">September</p>
                </div>
            </div>
        </footer>
    </>
);

export default HeroFooter;
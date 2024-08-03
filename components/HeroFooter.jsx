const HeroFooter = () => (
    <>
        <footer className=" flex justify-center">
            <div className="md:w-full md:max-w-none px-4 md:px-8 container flex justify-between items-end">
                <div className="flex gap-4 md:gap-10">
                    <img src="./insta.png" alt="insta" className="size-4 md:size-8 2k:size-10"/>
                    <img src="./twitter.png" alt="twitter" className="size-4 md:size-8 2k:size-10" />
                    <img src="./mail.png" alt="mail" className="size-4 md:size-8 2k:size-10"/>
                </div>
                <span className=" flex flex-col text-xl md:text-5xl 2k:text-6xl font-extrabold items-end "><h1 className="text-3xl md:text-6xl 2k:text-7xl">8th</h1> <h2 >September</h2></span>
            </div>
        </footer>
    </>
);

export default HeroFooter;
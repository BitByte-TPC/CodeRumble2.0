const HeroFooter = () => (
    <>
        <footer className="mx-4 md:mx-12 flex justify-center">
            <div className="container px-4 md:px-8 flex justify-between items-end">
                <div className="flex gap-4 md:gap-10">
                    <img src="./insta.png" alt="insta" className="size-4 md:size-8"/>
                    <img src="./twitter.png" alt="twitter" className="size-4 md:size-8" />
                    <img src="./mail.png" alt="mail" className="size-4 md:size-8"/>
                </div>
                <span className=" flex flex-col text-xl md:text-5xl font-extrabold items-end "><h1 className="text-3xl md:text-6xl">8th</h1> <h2 className="">September</h2></span>
            </div>
        </footer>
    </>
);

export default HeroFooter;
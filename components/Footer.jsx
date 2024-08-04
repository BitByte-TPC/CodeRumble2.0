const Footer = () => (
    <>
        <footer className="mx-12 py-10 flex-col md:none">
            <div className="px-4 md:px-8">
                <div className="md:absolute py-3 flex gap-10 justify-center">
                    <a href="https://www.instagram.com/bitbyte.tpc" target="_blank"><img src="./insta.png" alt="insta" className="size-6 md:size-8 2k:size-10" /></a>
                    <a href="https://x.com/BitByte_IIITDMJ" target="_blank"><img src="./twitter.png" alt="x" className="size-6 md:size-8 2k:size-10"/></a>
                    <a href="mailto: theprogclub@iiitdmj.ac.in" target="_blank"><img src="./mail.png" alt="mail" className="size-6 md:size-8 2k:size-10"/></a>
                </div>
                <span className="flex justify-center gap-4 text-[#FFFFFF80] text-base md:text-xl py-3">Copyright <img src="./copyright.svg" alt="C" className="w-4 md:w-6 h-4 md:h-6 flex items-start align-top"/> 2024 CodeRumble 2.0 All rights reserved</span>
            </div>
        </footer>
    </>
);

export default Footer;
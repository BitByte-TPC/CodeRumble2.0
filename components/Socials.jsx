const HeroFooter = () => (
  <>
    <footer className=" flex justify-center">
      <div className=" container flex justify-between items-center">
        <div className="flex gap-3 sm:gap-4 md:gap-10 pb-1 sm:pb-0">
          <img
            src="./insta.png"
            alt="insta"
            className="size-6 md:size-8 2k:size-10"
          />
          <img
            src="./twitter.png"
            alt="twitter"
            className="size-6 md:size-8 2k:size-10"
          />
          <img
            src="./mail.png"
            alt="mail"
            className="size-6 md:size-8 2k:size-10"
          />
        </div>
      </div>
    </footer>
  </>
);

export default HeroFooter;

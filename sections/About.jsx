const About =()=>(
    <div className="flex flex-col items-center w-[100%] gap-5 md:gap-10 :gap-20 justify-center mx-auto my-10 sm:my-28 xl:my-[12rem]">
        <h1 className="text-[6vw] lg:text-[5vw] 2k:text-9xl font-extrabold text-center w-[100%]">What is Code Rumble 2.0?</h1>
        <p className="px-8 md:px-10 md:py-4 text-[2.5vw] md:text-2xl 2xl:text-3xl font-semibold flex text-center text-[#FFFFFF80] w-[100%] md:w-[90%] lg:w-[70%]"
        style={{
            backgroundImage: 'url(./grid.svg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
        }}>
            CodeRumble is a new the ultimate event for aspiring programmers to experience the exhilarating world of competitive programming. As a mock ICPC Regional Contest, we bring you a stimulating challenge that will push your coding skills to the limit. Unlock your problem-solving potential, tackle challenging algorithms, and rise to the top! Be a part of the coding extravaganza - CodeRumble awaits your coding prowess!
        </p>
    </div>
);

export default About;
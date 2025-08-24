import coderumble from '@/assets/coderumble.svg'
import Image from 'next/image';
import gear from '@/assets/gear.svg'
import bulb from '@/assets/bulb.svg'
import brain from '@/assets/brain.svg'

export default function About() {
    return (
        <div className="min-h-screen flex justify-center py-10 md:py-20 px-4">
            <div className='w-full md:w-[60%] flex flex-col gap-10 md:gap-20 items-center'>
                <div className='bg-amber-500/0 flex flex-col gap-6 md:gap-8 w-full'>
                    <div className='flex flex-col md:flex-row justify-center items-center md:items-baseline gap-2 md:gap-6 text-3xl md:text-5xl'>
                        <p className='font-cocogoose text-center'>So, What is</p>
                        <Image 
                            className='h-8 md:h-[56px] w-fit'
                            src={coderumble} 
                            alt="Coderumble" 
                            priority
                        />
                        <p className='font-cocogoose'>
                            ?
                        </p>
                    </div>
                    <div>
                        <p className='font-bold leading-tight text-sm md:text-lg text-center font-mabry px-4 md:px-10'>
                            CodeRumble is a new the ultimate event for aspiring programmers to experience the exhilarating world of competitive programming. As a mock ICPC Regional Contest, we bring you a stimulating challenge that will push your coding skills to the limit. Unlock your problem-solving potential, tackle challenging algorithms, and rise to the top! Be a part of the coding extravaganza - CodeRumble awaits your coding prowess!
                        </p>
                    </div>
                </div>
                <div className='w-full flex flex-col items-center gap-6 md:gap-10'>
                    <p className='font-cocogoose text-2xl md:text-[44px] w-full text-center px-4'>
                        But, Why participate though? 
                    </p>
            
                    <div className='w-full flex flex-col md:flex-row px-4 md:px-10'>
                        <div className='bg-primary w-full md:w-[70%] h-auto md:h-44 flex flex-col justify-center p-6 md:p-10 border-white border-1 rounded-2xl mb-4 md:mb-0'>
                            <p className='font-cocogoose text-secondary font-extrabold text-2xl md:text-[44px]'>
                                one.
                            </p>
                            <p className='font-mabry text-black text-lg md:text-[25px] font-extrabold leading-6 md:leading-8'>
                                Sharpen coding skills in an ICPC Mock Regional environment!
                            </p>
                        </div>
                        <div className='w-full md:w-[30%] flex justify-center items-center h-32 md:h-auto'>
                            <Image 
                                src={gear} 
                                alt="gear" 
                                priority
                            />
                        </div>
                    </div>

                    <div className='w-full flex flex-col-reverse md:flex-row px-4 md:px-10'>
                        <div className='w-full md:w-[30%] flex justify-center items-center h-32 md:h-auto'>
                            <Image 
                                src={bulb} 
                                alt="bulb" 
                                priority
                            />
                        </div>
                        <div className='bg-secondary w-full md:w-[70%] h-auto md:h-44 flex flex-col justify-center p-6 md:p-10 border-white border-1 rounded-2xl mb-4 md:mb-0'>
                            <p className='font-cocogoose text-primary font-extrabold text-2xl md:text-[44px] text-left md:text-right'>
                                two.
                            </p>
                            <p className='font-mabry text-white text-lg md:text-[25px] font-extrabold text-left md:text-right leading-6 md:leading-8'>
                                Thrive in healthy competition with like-minded peers!
                            </p>
                        </div>
                    </div>

                    <div className='w-full flex flex-col md:flex-row px-4 md:px-10'>
                        <div className='bg-primary w-full md:w-[70%] h-auto md:h-44 flex flex-col justify-center p-6 md:p-10 border-white border-1 rounded-2xl mb-4 md:mb-0'>
                            <p className='font-cocogoose text-secondary font-extrabold text-2xl md:text-[44px]'>
                                three.
                            </p>
                            <p className='font-mabry text-black text-lg md:text-[25px] font-extrabold leading-6 md:leading-8'>
                                Gain insights from ICPC world finalists as guest speakers!
                            </p>
                        </div>
                        <div className='w-full md:w-[30%] flex justify-center items-center h-20 md:h-auto'>
                            <Image
                                src={brain} 
                                alt="brain" 
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
"use client";

import { useEffect } from "react";
import Image from "next/image";

function Lumi() {
    useEffect(() => {
        const eyeElements = document.querySelectorAll(".eye");
        const main = document.querySelector(".eyes");
        const middle = main.getBoundingClientRect();
        const anchorX = middle.left + middle.width / 2;
        const anchorY = middle.top + middle.height / 2;
        const maxRadius = 100; // Maximum radius the eyes can move within

        const calAngleAndDistance = (cx, cy, ex, ey) => {
            const dy = ey - cy;
            const dx = ex - cx;
            const rad = Math.atan2(dy, dx);
            const distance = Math.sqrt(dx * dx + dy * dy);
            return { angle: rad, distance: distance };
        };

        const handleMouseMove = (e) => {
            const mousex = e.clientX;
            const mousey = e.clientY;

            const { angle, distance } = calAngleAndDistance(
                anchorX,
                anchorY,
                mousex,
                mousey
            );

            // Constrain the distance to the maximum radius
            const constrainedDistance = Math.min(distance, maxRadius);

            const offsetX = Math.cos(angle) * constrainedDistance;
            const offsetY = Math.sin(angle) * constrainedDistance ;

            eyeElements.forEach((item) => {
                item.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
            });
        };

        document.addEventListener("mousemove", handleMouseMove);

        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <>
            {/* <div className="flex-col "> */}
                {/* <div className="z-10 ">
                    <Image
                        src='/lumiDefault.png'
                        width={500}
                        height={500}
                        alt='Lumi'
                    />
                </div> */}

                <div className='flex gap-[4.5rem]  z-20 right-[55rem] top-[22.5rem] eyes'>
                    <div className='bg-white rounded-xl h-[7.5rem] w-[2.5rem]  eye'></div>
                    <div className='bg-white rounded-xl h-[7.5rem] w-[2.5rem]  eye'></div>
                {/* </div> */}
            </div>
        </>
    );
}

export default Lumi;

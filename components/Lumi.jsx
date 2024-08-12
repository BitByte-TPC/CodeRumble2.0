"use client";

import { useEffect, useRef } from "react";

function Lumi() {
  const videoRef = useRef(null);

  useEffect(() => {
    const eyeElements = document.querySelectorAll(".eye");
    const main = document.querySelector(".anchor");
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
      const offsetY = Math.sin(angle) * constrainedDistance;

      eyeElements.forEach((item) => {
        item.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
      });
    };

    document.addEventListener("mousemove", handleMouseMove);

    if (videoRef.current) {
      videoRef.current.playbackRate = 0.4; // Set playback speed to 50%
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="relative">
      <video
        ref={videoRef}
        src="/lumi.webm"
        autoPlay
        loop
        muted
        className="anchor sm:w-full sm:h-full w-[500px] h-[500px]"
      />

      <div className="flex gap-[2rem] sm:gap-[4.5rem] absolute top-[50%] left-[50%] transform -translate-x-[45%] -translate-y-[35%] z-20">
        <div className="bg-white rounded-md sm:rounded-xl h-[3.5rem] w-[1.4rem] sm:h-[7.5rem] sm:w-[2.5rem] eye transition-transform duration-300 ease-out"></div>
        <div className="bg-white rounded-md sm:rounded-xl h-[3.5rem] w-[1.4rem] sm:h-[7.5rem] sm:w-[2.5rem] eye transition-transform duration-300 ease-out"></div>
      </div>
    </div>
  );
}

export default Lumi;

"use client";
import React, { useEffect } from "react";
import Glide from "@glidejs/glide";

export default function CarouselControlsOutside() {
  useEffect(() => {
    const glide = new Glide(".glide-04", {
      type: "slider", // Change to slider type for non-looping
      focusAt: "center",
      perView: 1.5,
      autoplay: 3500,
      animationDuration: 700,
      gap: 16,
      breakpoints: {
        1024: {
          perView: 1,
          gap: 24,
        },
        640: {
          perView: 1,
          gap: 16,
        },
      },
    });

    glide.mount();

    return () => {
      glide.destroy();
    };
  }, []);

  return (
    <>
      <div className="glide-04 relative w-full max-w-screen-lg mx-auto overflow-hidden justify-center items-center">
        <div className="glide__track" data-glide-el="track">
          <ul className="glide__slides flex">
            <li
              className="glide__slide flex-shrink-0"
              style={{ width: "1024px", height: "400px" }}
            >
              <img
                src="/carousel1.webp"
                className="w-full h-full object-cover rounded-lg"
                alt="CodeRumble 2.0 Photo"
                height={300}
                width={1024}
              />
            </li>
            <li
              className="glide__slide flex-shrink-0"
              style={{ width: "1024px", height: "400px" }}
            >
              <img
                src="/carousel2.webp"
                className="w-full h-full object-cover rounded-lg"
                alt="CodeRumble 2.0 Photo"
                height={300}
                width={1024}
              />
            </li>
            <li
              className="glide__slide flex-shrink-0"
              style={{ width: "1024px", height: "400px" }}
            >
              <img
                src="/carousel3.webp"
                className="w-full h-full object-cover rounded-lg"
                alt="CodeRumble 2.0 Photo"
                height={300}
                width={1024}
              />
            </li>
          </ul>
        </div>
        <div
          className="flex justify-end space-x-2 py-4"
          data-glide-el="controls"
        >
          <button
            className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-white transition duration-300 hover:bg-white/40 focus-visible:outline-none lg:h-10 lg:w-10"
            data-glide-dir="<"
            aria-label="prev slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-5 w-5"
            >
              <title>prev slide</title>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                stroke="white"
              />
            </svg>
          </button>
          <button
            className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-white transition duration-300 hover:bg-white/40 focus-visible:outline-none lg:h-10 lg:w-10"
            data-glide-dir=">"
            aria-label="next slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-5 w-5"
            >
              <title>next slide</title>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                stroke="white"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}

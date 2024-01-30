import "@/styles/globals.css";
import { useScroll, useMotionValueEvent, motion } from "framer-motion";
import type { AppProps } from "next/app";
import localFont from "next/font/local";
import { useRef, useState } from "react";
import React, { useEffect } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import SplitType from "split-type";

const tt_trailers = localFont({
  src: [
    {
      path: "../../public/assets/fonts/TT Traillers.ttf",
    },
  ],
  variable: "--font-tt_trailers",
});

export default function App({ Component, pageProps }: AppProps) {
  const ref = useRef(null);
  const [posY, setPosY] = useState(0);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end 1"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log("Page scroll: ", latest);
    setPosY(latest);
  });

  useEffect(() => {
    //Text Reveal Animation
    gsap.registerPlugin(ScrollTrigger);
    const splitTypes = document.querySelectorAll("#text-reveal-animation");
    splitTypes.forEach((char, i) => {
      const text = new SplitType(char as HTMLElement, { types: "words" });
      console.log(text);
      gsap.from(text.words, {
        scrollTrigger: {
          trigger: char,
          start: "top 80%",
          end: "top 20%",
          scrub: true,
          markers: false,
        },
        opacity: 0.2,
        stagger: 0.1,
      });
    });

    // Cursor Animation
    const cursorDot = document.getElementById("cursor-dot");
    const cursorCircle = document.getElementById("cursor-circle");
    window.addEventListener("mousemove", function (e) {
      const posX = e.clientX;
      const posY = e.clientY;
      if (cursorDot) {
        cursorDot.style.left = `${posX}px`;
        cursorDot.style.top = `${posY}px`;
      }

      if (cursorCircle) {
        cursorCircle.animate(
          {
            left: `${posX}px`,
            top: `${posY}px`,
          },
          { duration: 500, fill: "forwards" }
        );
      }
    });
  }, []);

  return (
    <main className={`${tt_trailers.variable} `} ref={ref}>
      <motion.div
        className="fixed bg-[#7862f8] w-[100vw] h-[1vh] z-50"
        style={{ scaleX: scrollYProgress, transformOrigin: "left" }}
      ></motion.div>
      <div id="cursor-dot" />
      <div id="cursor-circle" />
      <Component {...pageProps} />
    </main>
  );
}

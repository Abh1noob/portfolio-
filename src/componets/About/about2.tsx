import React, { useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useRef } from "react";
import { gsap } from "gsap";
import SplitType from "split-type";

const About1 = () => {
  const ref = useRef(null);
  const [posY, setPosY] = useState(0);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0.5 1", "0 0.2"],
  });
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // console.log("Page scroll: ", latest);
    setPosY(latest);
  });
  return (
    <div className="h-[100vh] w-[100vw]  bg-[#222831] text-white flex items-center justify-center text-[50px] px-10">
      <p>
        A Computer Science undergrad student at VIT Vellore, I&apos;m skilled in
        Flutter and Next.js, always eager to learn new things.
      </p>
    </div>
  );
};

export default About1;

import { useScroll, useMotionValueEvent } from "framer-motion";
import React, { useRef, useState } from "react";

const About3 = () => {
  const ref = useRef(null);
  const [posY, setPosY] = useState(0);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0.5 1", "0 0.2"],
  });
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log("Page scroll: ", latest);
    setPosY(latest);
  });
  return (
    <div className="h-[100vh] w-[100vw]  bg-[#222831] flex items-center justify-center text-[50px] px-10">
      <p style={{ opacity: posY }} ref={ref}>
        When I'm not immersed in coding or solving problems, you will find me
        playing games and trying delicious food. Balancing my passion for
        technology with a bit of fun makes my journey in the tech world
        exciting.
      </p>
    </div>
  );
};

export default About3;

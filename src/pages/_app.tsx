import "@/styles/globals.css";
import { useScroll, useMotionValueEvent, motion } from "framer-motion";
import type { AppProps } from "next/app";
import localFont from "next/font/local";
import { useRef, useState } from "react";

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
  return (
    <main className={`${tt_trailers.variable} `} ref={ref}>
      <motion.div
        className="fixed bg-[#E84545] w-[100vw] h-[1vh]"
        style={{ scaleX: scrollYProgress, transformOrigin: "left" }}
      ></motion.div>
      <Component {...pageProps} />
    </main>
  );
}

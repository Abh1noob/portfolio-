"use client";
import React, { use, useEffect, useState } from "react";
import Projects from "@/componets/Projects/projects";
import Footer from "@/componets/Footer/footer";
import Skills from "@/componets/Skills/skills";
import About from "@/componets/About/about";
import SmoothScrolling from "@/componets/SmoothScrolling";
import Home from "@/componets/Home/home";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useRef } from "react";
import Navbar from "@/componets/Navbar/navbar";

export default function Main() {
  const ref = useRef(null);
  const [posY, setPosY] = useState(0);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log("Page scroll: ", latest);
    setPosY(latest);
  });

  return (
    <>
      <motion.main className="overflow-x-auto scroll-smooth">
        <title>Abhinav | Portfolio</title>
        <SmoothScrolling>
          <div className="absolute">
            <div ref={ref} className="h-[60vh] w-screen"></div>
            <section className={`${posY == 1 ? "fixed top-0 z-10" : ""}`}>
              <Navbar />
            </section>
          </div>
          <section id="Home" className="scroll-mt-12">
            <Home />
          </section>
          <section id="About" className="scroll-mt-6 ">
            <About />
          </section>
          <section id="Skills" className="scroll-mt-6 ">
            <Skills />
          </section>
          <section id="Projects" className="scroll-mt-6 ">
            <Projects />
          </section>
          <section id="Contact" className="scroll-mt-6 ">
            <Footer />
          </section>
        </SmoothScrolling>
      </motion.main>
    </>
  );
}

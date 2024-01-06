import React from "react";
import Projects from "@/componets/Projects/projects";
import Footer from "@/componets/Footer/footer";
import Skills from "@/componets/Skills/skills";
import About from "@/componets/About/about";
import SmoothScrolling from "@/componets/SmoothScrolling";
import Home from "@/componets/Home/home";

export default function Main() {
  return (
    <>
      <main className="overflow-x-auto scroll-smooth">
        <title>Abhinav | Portfolio</title>
        <SmoothScrolling>
          <section id="Home" className="scroll-mt-12 ">
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
      </main>
    </>
  );
}

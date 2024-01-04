import React from "react";
import Projects from "@/componets/Projects/projects";
import About from "@/componets/About/about";
import Footer from "@/componets/Footer/footer";
import Skills from "@/componets/Skills/skills";
import Brief from "@/componets/Brief/brief";
import Navbar from "@/componets/Navbar/navbar";
import SmoothScrolling from "@/componets/SmoothScrolling";

export default function Home() {
  return (
    <>
      <main className="overflow-x-auto scroll-smooth">
        <title>Abhinav | Portfolio</title>
        <SmoothScrolling>
          <div>
            <section id="Home" className="scroll-mt-12 ">
              <About />
            </section>
            <section id="About" className="scroll-mt-6 ">
              <Brief />
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
          </div>
        </SmoothScrolling>
      </main>
    </>
  );
}

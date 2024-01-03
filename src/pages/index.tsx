import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Projects from "@/componets/Projects/projects";
import About from "@/componets/About/about";
import Footer from "@/componets/Footer/footer";
import Skills from "@/componets/Skills/skills";
import Brief from "@/componets/Brief/brief";
import Navbar from "@/componets/Navbar/navbar";

export default function Home() {
  return (
    <>
      <main className="overflow-x-auto scroll-smooth">
        <title>Abhinav | Portfolio</title>
        <div className="scroll-smooth">
        <div className="fixed z-50">
          <Navbar />
        </div>
        <section id="Home" className="scroll-mt-12">
          <About />
        </section>
        <section id="About" className="scroll-mt-6">
          <Brief />
        </section>
        <section id="Skills" className="scroll-mt-6">
          <Skills />
        </section>
        <section id="Projects" className="scroll-mt-6">
          <Projects />
        </section>
        <section id="Contact" className="scroll-mt-6">
          <Footer />
        </section>
        </div>
        
      </main>
    </>
  );
}

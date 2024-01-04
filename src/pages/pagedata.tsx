import About from "@/componets/About/about";
import Brief from "@/componets/Brief/brief";
import Footer from "@/componets/Footer/footer";
import Navbar from "@/componets/Navbar/navbar";
import Projects from "@/componets/Projects/projects";
import Skills from "@/componets/Skills/skills";
import React from "react";

const Pagedata = () => {
  return (
    <div>
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
  );
};

export default Pagedata;

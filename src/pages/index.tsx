import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Projects from "@/componets/Projects/projects";
import About from "@/componets/About/about";
import Footer from "@/componets/Footer/footer";
import Skills from "@/componets/Skills/skills";
import Brief from "@/componets/Brief/brief";

export default function Home() {
  return (
    <>
      <main className="overflow-x-auto">
        <title>Abhinav | Portfolio</title>
        <About />
        <Brief />
        <Skills />
        <Projects />
        <Footer />
      </main>
    </>
  );
}

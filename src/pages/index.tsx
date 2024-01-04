import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Projects from "@/componets/Projects/projects";
import About from "@/componets/About/about";
import Footer from "@/componets/Footer/footer";
import Skills from "@/componets/Skills/skills";
import Brief from "@/componets/Brief/brief";
import Navbar from "@/componets/Navbar/navbar";
import SmoothScrolling from "@/componets/SmoothScrolling";
import Pagedata from "./pagedata";

export default function Home() {
  return (
    <>
      <main className="overflow-x-auto scroll-smooth">
        <title>Abhinav | Portfolio</title>
        <SmoothScrolling>
          <Pagedata />
        </SmoothScrolling>
      </main>
    </>
  );
}

"use client";
import React from "react";
import { useLenis } from "@studio-freight/react-lenis";

const Navbar = () => {
  const lenis = useLenis(({ scroll }) => {
    console.log(scroll);
  });
  return (
    <div className="w-[100vw] h-auto flex items-center justify-center my-10">
      <div className="w-[60vw] h-[8vh] rounded-r-full rounded-l-full bg-[#191919] flex justify-evenly items-center font-bold tracking-wider text-[#F5F5F5]">
        <div
          onClick={() => lenis.scrollTo("#Home", { lerp: 0.1, duration: 1 })}
        >
          Home
        </div>
        <div
          onClick={() => lenis.scrollTo("#About", { lerp: 0.1, duration: 1 })}
        >
          About
        </div>
        <div
          onClick={() => lenis.scrollTo("#Skills", { lerp: 0.1, duration: 1 })}
        >
          Skills
        </div>
        <div
          onClick={() =>
            lenis.scrollTo("#Projects", { lerp: 0.1, duration: 1 })
          }
        >
          Projects
        </div>
        <div
          onClick={() => lenis.scrollTo("#Contact", { lerp: 0.1, duration: 1 })}
        >
          Contact
        </div>
      </div>
    </div>
  );
};

export default Navbar;

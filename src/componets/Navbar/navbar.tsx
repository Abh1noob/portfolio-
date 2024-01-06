"use client";
import React from "react";
import { useLenis } from "@studio-freight/react-lenis";

const Navbar = () => {
  const lenis = useLenis(({ scroll }) => {
    // console.log(scroll);
  });
  return (
    <div className="w-[98vw] h-auto flex items-center justify-center my-10">
      <div className="w-[60vw] h-[8vh] rounded-r-full rounded-l-full bg-[#191919] flex justify-evenly items-center font-bold tracking-wider text-[#F5F5F5]">
        <div
          onClick={() => lenis.scrollTo("#Home", { lerp: 0.1, duration: 1 })}
          className="cursor-pointer"
        >
          Home
        </div>
        <div
          onClick={() => lenis.scrollTo("#About", { lerp: 0.1, duration: 1 })}
          className="cursor-pointer"
        >
          About
        </div>
        <div
          onClick={() => lenis.scrollTo("#Skills", { lerp: 0.1, duration: 1 })}
          className="cursor-pointer"
        >
          Skills
        </div>
        <div
          onClick={() =>
            lenis.scrollTo("#Projects", { lerp: 0.1, duration: 1 })
          }
          className="cursor-pointer"
        >
          Projects
        </div>
        <div
          onClick={() => lenis.scrollTo("#Contact", { lerp: 0.1, duration: 1 })}
          className="cursor-pointer"
        >
          Contact
        </div>
      </div>
    </div>
  );
};

export default Navbar;

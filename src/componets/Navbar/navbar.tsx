import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-[100vw] h-auto flex items-center justify-center my-10">
      <div className="w-[60vw] h-[8vh] rounded-r-full rounded-l-full bg-[#191919] flex justify-evenly items-center font-bold tracking-wider text-[#F5F5F5]">
        <Link href={"#Home"}>Home</Link>
        <Link href={"#About"}>About</Link>
        <Link href={"#Skills"}>Skills</Link>
        <Link href={"#Projects"}>Projects</Link>
        <Link href={"#Contact"}>Contact</Link>
      </div>
    </div>
  );
};

export default Navbar;

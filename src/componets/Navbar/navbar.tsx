import React, { useEffect, useState } from "react";
import { useLenis } from "@studio-freight/react-lenis";
import { GiHamburgerMenu } from "react-icons/gi";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const lenis = useLenis(({ scroll }) => {
    // console.log(scroll);
  });

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
  }, []);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 2,
        staggerChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: { translateX: -300, opacity: 0 },
    show: { translateX: 0, opacity: 1 },
  };

  return isMobile ? (
    <>
      <div
        className="text-[30px] flex justify-end text-white bg-[#080808] absolute right-0"
        onClick={() => toggleMobileMenu()}
      >
        <div className="p-2">
          <GiHamburgerMenu />
        </div>
        {isMobileMenuOpen ? (
          <motion.ul
            variants={container}
            initial="hidden"
            animate="show"
            exit="exit"
            className="h-screen w-screen  bg-black/80 absolute flex flex-col items-center justify-center"
          >
            <motion.li
              variants={item}
              onClick={() =>
                lenis.scrollTo("#Home", { lerp: 0.1, duration: 1 })
              }
            >
              Home
            </motion.li>
            <motion.li
              variants={item}
              onClick={() =>
                lenis.scrollTo("#About", { lerp: 0.1, duration: 1 })
              }
            >
              About
            </motion.li>
            <motion.li
              variants={item}
              onClick={() =>
                lenis.scrollTo("#Skills", { lerp: 0.1, duration: 1 })
              }
            >
              Skills
            </motion.li>
            <motion.li
              variants={item}
              onClick={() =>
                lenis.scrollTo("#Projects", { lerp: 0.1, duration: 1 })
              }
            >
              Projects
            </motion.li>
            <motion.li
              variants={item}
              onClick={() =>
                lenis.scrollTo("#Contact", { lerp: 0.1, duration: 1 })
              }
            >
              Contact
            </motion.li>
          </motion.ul>
        ) : (
          <></>
        )}
      </div>
    </>
  ) : (
    <div className="w-[98vw] h-auto flex items-center justify-center md:my-10">
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

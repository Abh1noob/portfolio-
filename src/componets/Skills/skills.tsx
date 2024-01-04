"use client";

import React from "react";
import { skills } from "@/Data/skills";
import { motion } from "framer-motion";
import Image from "next/image";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.08 * index,
    },
  }),
};
const Skills = () => {
  return (
    <>
      <div className="h-[100vh] w-[100vw] bg-[#222831]">
        <div className="px-20">
          <div className="text-[70px] text-white font-tt_trailers tracking-wide">Skills</div>
          <div className="flex flex-col items-center justify-center h-[80vh]">
            <ul className="flex flex-wrap justify-center gap-6 text-lg text-gray-800 w-[50vw]">
              {skills.map((skill, index) => (
                <motion.li
                  className="bg-[#E84545] rounded-xl px-5 py-3 "
                  key={index}
                  variants={fadeInAnimationVariants}
                  initial="initial"
                  whileInView="animate"
                  viewport={{
                    once: true,
                  }}
                  custom={index}
                >
                  <div className="flex flex-col items-center m-1">
                    <div className="mb-3">
                      <Image
                        src={skill.image}
                        alt="logo"
                        height={0}
                        width={0}
                        className="h-[100px] w-[100px]"
                      />
                    </div>
                    <div className="text-[22px]">{skill.name}</div>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
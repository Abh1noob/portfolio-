import React from "react";
import lottie from "../../../public/assets/other/lottie.json";
import Lottie from "lottie-react";
import { motion } from "framer-motion";


const About = () => {
  return (
    <div className="flex flex-row items-center justify-around text-white h-[100vh] w-[100vw] bg-[#222831]">
      <div className="flex flex-col text-white h-full justify-center w-[40vw] break-words">
        <motion.p
          className="text-xl"
          initial={{ x: -150, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{
            once: true,
          }}
        >
          Hello, I am
        </motion.p>
        <motion.p
          className={`text-7xl drop-shadow-2xl text-[#E84545]`}
          initial={{ x: -150, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          viewport={{
            once: true,
          }}
        >
          Abhinav Ganeshan
        </motion.p>
      </div>
      <Lottie
        animationData={lottie}
        className="hover:scale-105  transition-all ease-in-out h-[75vh]"
      />
    </div>
  );
};

export default About;

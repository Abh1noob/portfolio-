import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

const Home = () => {
  return (
    <>
      <div className="md:h-[92vh] h-min  w-[100vw] flex items-center justify-center flex-col bg-[#080808] ">
        <div className="md:text-[250px] text-[100px] text-white font-tt_trailers tracking-wider">
          Abhinav
        </div>
      </div>
      <div className="flex flex-row md:justify-between justify-center items-center h-[8vh] w-[100vw] bg-[#080808] p-6">
        <div className="flex flex-row gap-4 items-center  ">
          <div className="transition-all duration-300 ease-in-out text-[20px] md:text-[30px] text-white md:bg-[#080808] border-white border-2 p-2 rounded-xl md:hover:rounded-[50px] md:hover:text-white/50">
            <FaGithub />
          </div>
          <div className="transition-all duration-300 ease-in-out text-[20px] md:text-[30px] text-white md:bg-[#080808] border-white border-2 p-2 rounded-xl md:hover:rounded-[50px] md:hover:text-white/50">
            <FaLinkedin />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

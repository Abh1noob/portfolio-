import React, { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

const Home = () => {
  return (
    <>
      <div className="h-[92vh] w-[100vw] flex items-center justify-center flex-col bg-[#080808] ">
        <div className="text-[300px] text-white font-tt_trailers tracking-wider">
          Abhinav
        </div>
      </div>
      <div className="flex flex-row justify-between items-center h-[8vh] w-[100vw] bg-[#080808] p-6">
        <div>hello</div>
        <div className="flex flex-row gap-4 items-center ">
          <div className="text-[22px]">Connect:</div>
          <div className="transition-all duration-300 ease-in-out text-[30px] bg-[#080808] border-black border-2 text-black p-2 rounded-xl hover:rounded-[50px] hover:text-[#080808] hover:bg-black">
            <FaGithub />
          </div>
          <div className="transition-all duration-300 ease-in-out text-[30px] bg-[#080808] border-black border-2 text-black p-2 rounded-xl hover:rounded-[50px] hover:text-[#080808] hover:bg-black">
            <FaLinkedin />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

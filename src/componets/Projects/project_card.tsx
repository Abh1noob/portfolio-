import React, { useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  redirect: string;
  image: string[];
  techstack: string;
}

const ProjectCard: React.FC<ProjectCardProps> = (props) => {
  const [hoverState, setHoverState] = useState(false);
  const [Index, setIndex] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % props.image.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div
      className={`flex flex-col justify-between bg-white shadow-white border-2 border-white h-[70vh] w-[22vw] text-black rounded-md transition-all duration-300 ease-in-out overflow-hidden ${
        hoverState
          ? "hover:rounded-[40px] hover:shadow-black hover:scale-105 hover:shadow-lg"
          : ""
      }`}
      onMouseEnter={() => setHoverState(true)}
      onMouseLeave={() => setHoverState(false)}
    >
      <div className="items-center flex flex-col justify-evenly ">
        <Image
          src={props.image[Index]}
          width={10000}
          height={10000}
          alt="Thumbnail"
          className="h-[30vh] w-[25vw]"
          quality={100}
        />

        <div className="text-gray-500 font-mono my-4">{props.techstack}</div>
        <div className="text-[40px] px-[10%] ">{props.title}</div>
      </div>
      <div className="flex items-center justify-evenly flex-col h-full w-full">
        <a
          href={props.redirect}
          target="_blank"
          rel="noopener noreferrer"
          className={`h-[6vh] w-[80%]  cursor-pointer flex items-center justify-center flex-col transition-all duration-300 ease-in-out overflow-hidden ${
            hoverState ? "rounded-[40px] bg-black" : "rounded-md bg-[#270082]"
          }`}
        >
          <div className="text-lg uppercase text-white rounded-xl">
            Learn More
          </div>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;

import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";

interface ProjectCardProps {
  title: string;
  redirect: string;
  image: StaticImageData;
  techstack: string;
}

const ProjectCard: React.FC<ProjectCardProps> = (props) => {
  const [hoverState, setHoverState] = useState(false);
  return (
    <div
      className={`flex flex-col justify-between bg-white h-[70vh] w-[22vw] text-black rounded-md hover:rounded-[40px] transition-all duration-300 ease-in-out overflow-hidden ${
        hoverState ? "hovered" : ""
      }`}
      onMouseEnter={() => setHoverState(true)}
      onMouseLeave={() => setHoverState(false)}
    >
      <div className="items-center flex flex-col justify-evenly ">
        <Image
          src={props.image}
          width={0}
          height={0}
          alt="Thumbnail"
          className="h-[30vh] w-[25vw]"
          quality={100}
        />
        <div className="text-gray-500 font-mono my-4">{props.techstack}</div>
        <div className="text-[40px] px-[10%] ">{props.title}</div>
      </div>
      <div className="flex items-center justify-evenly flex-col h-full w-full">
        <div
          className={`h-[6vh] w-[80%]  cursor-pointer flex items-center justify-center flex-col transition-all duration-300 ease-in-out overflow-hidden ${
            hoverState ? "rounded-[40px] bg-black" : "rounded-md bg-[#270082]"
          }`}
        >
          <div className="text-lg uppercase text-white rounded-xl">
            Learn More
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

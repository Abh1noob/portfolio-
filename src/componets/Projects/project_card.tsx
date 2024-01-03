import React, { useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";
import { ImNewTab } from "react-icons/im";

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
      className={`flex flex-col justify-between bg-[#E84545] shadow-white hover:border-2 border-white h-[70vh] w-[25vw] text-black rounded-md transition-all duration-300 ease-in-out overflow-hidden ${
        hoverState
          ? "hover:rounded-[40px] hover:shadow-[#903749] hover:scale-105 hover:shadow-lg"
          : ""
      }`}
      onMouseEnter={() => setHoverState(true)}
      onMouseLeave={() => setHoverState(false)}
    >
      <div className="items-center flex flex-col justify-evenly ">
        <Image
          src={props.image[Index]}
          width={1000}
          height={1000}
          alt="Thumbnail"
          className="h-[35vh] w-[25vw]"
          quality={100}
        />

        <div className="text- font-mono my-4 text-sm">{props.techstack}</div>
        <div className="text-[40px] px-[10%] ">{props.title}</div>
      </div>
      <div className="flex items-center justify-evenly flex-col h-full w-full">
        <a
          href={props.redirect}
          target="_blank"
          rel="noopener noreferrer"
          className={`h-[6vh] w-[80%]  cursor-pointer flex items-center justify-center flex-col transition-all duration-300 ease-in-out overflow-hidden ${
            hoverState ? "rounded-[40px] bg-black" : "rounded-md bg-[#53354A]"
          }`}
        >
          <div className=" flex items-center justify-center text-lg uppercase text-white rounded-xl ">
            {hoverState ? (
              <div id="move" className="flex flex-row gap-22">
                <div className="mx-10">Checkout</div>
                <div className="mx-10">Checkout</div>
                <div className="mx-10">Checkout</div>
                <div className="mx-10">Checkout</div>
                <div className="mx-10">Checkout</div>
                <div className="mx-10">Checkout</div>
                <div className="mx-10">Checkout</div>
                <div className="mx-10">Checkout</div>
                <div className="mx-10">Checkout</div>
                <div className="mx-10">Checkout</div>
                <div className="mx-10">Checkout</div>
                <div className="mx-10">Checkout</div>
                <div className="mx-10">Checkout</div>
                <div className="mx-10">Checkout</div>
              </div>
            ) : (
              <div className="flex flex-row gap-2 items-center justify-center">
                Checkout <ImNewTab />
              </div>
            )}
          </div>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;

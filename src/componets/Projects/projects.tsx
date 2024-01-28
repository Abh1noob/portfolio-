import React, { useEffect, useRef } from "react";
import ProjectCard from "./project_card";
import { projectList } from "@/Data/projects";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

const Projects = () => {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);
  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: "-100vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "1000 top",
          scrub: true,
          markers: false,
          pin: true,
        },
      }
    );
    return () => {
      pin.kill();
    };
  }, []);
  return (
    <>
      <div className="bg-[#222831] w-[100vw]">
        <div
          className="flex flex-col justify-evenly h-[100vh] px-20 w-auto"
          ref={triggerRef}
        >
          <div className=" text-[70px] text-white font-tt_trailers tracking-wide">
            Projects
          </div>
          <div
            ref={sectionRef}
            className="flex flex-row gap-10  items-center w-full p-3  h-[80vh] scrollbar scrollbar-thumb-[#E84545] scrollbar-track-gray-100"
          >
            {projectList.map((items, i) => {
              return (
                <div className="w-auto" key={i}>
                  <ProjectCard
                    key={i}
                    title={items.title}
                    redirect={items.redirect}
                    image={items.image}
                    techstack={items.techstack}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;

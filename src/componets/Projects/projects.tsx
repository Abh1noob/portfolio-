import React from "react";
import ProjectCard from "./project_card";
import { projectList } from "@/Data/projects";

const Projects = () => {
  return (
    <>
        <div className="bg-[#222831] w-[100vw]">
          <div className="flex flex-col justify-evenly h-[100vh] px-20 w-auto">
            <div className=" text-[70px] text-white font-tt_trailers tracking-wide">Projects</div>
            <div className="flex flex-row gap-6 overflow-x-auto items-center w-full p-3  h-[80vh] scrollbar scrollbar-thumb-[#E84545] scrollbar-track-gray-100">
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

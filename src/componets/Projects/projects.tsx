import React from "react";
import ProjectCard from "./project_card";
import { projectList } from "@/componets/Projects/projectList";

const Projects = () => {
  return (
    <div>
      <div className="flex flex-col justify-evenly h-[100vh] px-20 w-auto">
        <div className=" text-[80px] text-white">Projects</div>
        <div className="flex flex-row gap-6 overflow-x-auto items-center w-full p-3  h-[80vh]">
          {projectList.map((items, i) => {
            return (
              <div className="w-auto">
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
  );
};

export default Projects;

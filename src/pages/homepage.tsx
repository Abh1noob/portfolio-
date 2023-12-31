import ProjectCard from "@/componets/project_card";
import React from "react";
import thumbnail from "../assets/thumbnails/thumbnail1.png";

const homePage = () => {
  return (
    <div className="h-[100vh] w-[100vw] bg-black flex items-center justify-center ">
      <div className="h-[70vh] w-[20vw] rounded-md">
        <ProjectCard
          image={thumbnail}
          redirect="google.com"
          title="CookOff 8.0 Admin Portal"
          techstack="ReactJS • NextJS"
        />
      </div>
    </div>
  );
};

export default homePage;

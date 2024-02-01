import React, { useRef } from "react";
import ProjectCard from "./project_card";
import { projectList } from "@/Data/projects";
import { motion, useScroll, useTransform } from "framer-motion";

const Projects = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);
  return (
    <>
      <section
        ref={targetRef}
        className="relative h-[300vh] bg-[#080808] pl-20"
      >
        <div className="sticky top-0 flex  flex-col h-[110vh]   overflow-hidden  ">
          <div className="text-[70px] text-white font-tt_trailers tracking-wide text-left mt-6">
            Projects
          </div>
          <motion.div style={{ x }} className="flex gap-4 mt-10">
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
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Projects;

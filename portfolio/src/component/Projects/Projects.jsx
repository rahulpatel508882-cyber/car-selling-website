import React from "react";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
      <div className="py-12 px-8 flex flex-wrap gap-5">
        <ProjectsCard
          tittle="Car Selling Website"
          main="This is car selling wbesite created in react js used some componenet library"
        />
        <ProjectsCard
          tittle="Portfolio Website"
          main="This is portfolio website created in react js used some componenet library"
        />
        <ProjectsCard
          tittle="Library Management "
          main="This is library website created in react js used some componenet library"
        />
      </div>
    </div>
  );
};

export default Projects;

import React, { useState } from "react";
import ProjectBox from "./ProjectBox";

export default function Projects() {
  const [projects, setProjects] = useState([
    {
      img: "/images/yaadin.png",
      name: "Yaadin",
      company: "Elitive",
      repoLink: "https://.com",
      demoLink: "https://.com",
      techs: ["react.js", "redux", "tailwind"],
    },
    {
      img: "/images/sensolist.png",
      name: "SenSolist",
      company: "Elitive",
      repoLink: "https://.com",
      demoLink: "https://.com",
      techs: ["react.js", "redux", "tailwind"],
    },
    {
      img: "/images/signup.png",
      name: "React.js Authentication",
      company: "personal Project",
      repoLink: "https://.com",
      demoLink: "https://.com",
      techs: ["react.js", "redux", "tailwind"],
    },
    {
      img: "/images/todolist.png",
      name: "Task Tracker",
      company: "Personal Project",
      repoLink: "https://.com",
      demoLink: "https://.com",
      techs: ["react.js", "redux", "tailwind"],
    },
    {
      img: "/images/quote.png",
      name: "Quote Generator",
      company: "Personal Project",
      repoLink: "https://.com",
      demoLink: "https://.com",
      techs: ["react.js", "redux", "tailwind"],
    },
    {
      img: "/images/git.png",
      name: "Github Users",
      company: "Personal Project",
      repoLink: "https://.com",
      demoLink: "https://.com",
      techs: ["react.js", "redux", "tailwind"],
    },
    {
      img: "/images/contact.png",
      name: "Contact Us Form",
      company: "personal Project",
      repoLink: "https://.com",
      demoLink: "https://.com",
      techs: ["react.js", "redux", "tailwind"],
    },
    {
      name: "Dana Tashkhis",
      company: "Elitive",
      repoLink: "https://.com",
      demoLink: "https://.com",
      techs: ["react.js", "redux", "tailwind"],
    },
    {
      name: "Rira",
      company: "Elitive",
      repoLink: "https://.com",
      demoLink: "https://.com",
      techs: ["react.js", "redux", "tailwind"],
    },
  ]);

  return (
    <div className="w-full">
      <h2 className="text-4xl font-semibold text-center pb-10">Projects</h2>

      <div className="grid grid-cols-2 gap-7 w-full h-full">
        {projects.map((item, index) => {
          return <ProjectBox data={item} />;
        })}
      </div>

      {/* <div className="h-full rounded-2xl px-6 bg-box-back"></div> */}
    </div>
  );
}

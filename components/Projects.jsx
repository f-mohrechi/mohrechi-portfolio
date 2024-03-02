import React, { useState } from "react";
import ProjectBox from "./ProjectBox";

export default function Projects() {
  const [projects, setProjects] = useState([
    {
      img: "/images/zood-food.jpg",
      name: "Zood Food",
      company: "personal Project",
      demoLink: "https://zood-food.liara.run/",
      repoLink: "https://github.com/f-mohrechi/order-food",
      techs: [
        "React.js",
        "Redux",
        "Context API",
        "TailwindCSS",
        "React Toastify",
      ],
    },
    {
      img: "/images/yaadin.png",
      name: "Yaadin",
      company: "Elitive",
      demoLink: "https://yaadin.com",
      techs: ["React.js", "Next.js", "Redux", "Bootstrap"],
    },
    // {
    //   img: "/images/sensolist.png",
    //   name: "SenSolist",
    //   company: "Elitive",
    //   demoLink: "https://sensolist.com",
    //   techs: ["React.js", "Next.js", "Bootstrap"],
    // },
    {
      img: "/images/signup.png",
      name: "React.js Authentication",
      company: "personal Project",
      repoLink: "https://github.com/f-mohrechi/authentication",
      demoLink: "https://f-mohrechi.github.io/authentication/",
      techs: ["React.js", "TailwindCSS", "Axios", "Json-Server", "Formik"],
    },
    {
      img: "/images/todolist.png",
      name: "Task Tracker",
      company: "Personal Project",
      repoLink: "https://github.com/f-mohrechi/todo-list",
      demoLink: "https://f-mohrechi.github.io/todo-list/",
      techs: ["React.js", "Redux", "TailwindCSS"],
    },
    {
      img: "/images/quote.png",
      name: "Quote Generator",
      company: "Personal Project",
      repoLink: "https://github.com/f-mohrechi/quote-generator",
      // demoLink: "f-mohrechi.github.io/quote-generator/",
      techs: ["React.js", "TailwindCSS", "Axios", "Ninjas-API"],
    },
    {
      img: "/images/git.png",
      name: "Github Users",
      company: "Personal Project",
      repoLink: "https://github.com/f-mohrechi/github-api",
      // demoLink: "f-mohrechi.github.io/github-api/",
      techs: ["React.js", "TailwindCSS", "Axios", "Github-API", "React Query"],
    },
    {
      img: "/images/contact.png",
      name: "Contact Us Form",
      company: "personal Project",
      repoLink: "https://github.com/f-mohrechi/contact-us",
      // demoLink: "f-mohrechi.github.io/contact-us/",
      techs: ["React.js", "TailwindCSS", "Axios", "Json-Server", "Formik"],
    },
  ]);

  return (
    <div className="w-full">
      <h2 className="text-2xl sm:text-4xl font-semibold text-center pb-10">
        Projects
      </h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-3 gap-4 md:gap-5 lg:gap-7 w-full h-full">
        {projects.map((item, index) => {
          return <ProjectBox data={item} key={index} />;
        })}
      </div>

      {/* <div className="h-full rounded-2xl px-6 bg-box-back"></div> */}
    </div>
  );
}

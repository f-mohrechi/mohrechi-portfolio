import React, { useState } from "react";

export default function MenuSideBar() {
  const [sections, setSections] = useState([
    { icon: "/icons/home.svg", title: "home", link: "/" },
    { icon: "/icons/company.svg", title: "experience", link: "#experience" },
    { icon: "/icons/book.svg", title: "education", link: "#education" },
    { icon: "/icons/code.svg", title: "projects", link: "#projects" },
    { icon: "/icons/call.svg", title: "contact", link: "#contact-me" },
  ]);

  return (
    <div className="bg-box-back h-[95vh] w-full rounded-2xl py-6 p-5 2xl:p-6 sticky top-8 flex flex-col items-center">
      <button className="mb-28 rounded-lg contrast-0 hover:contrast-100 hover:scale-125 transition-all ease-in-out delay-75 h-11 cursor-pointer">
        <img src="/icons/theme.svg" />
      </button>

      <div className="flex flex-col justify-around h-full">
        {sections.map((item, index) => {
          return (
            <a
              href={item.link}
              className="rounded-lg contrast-0 hover:contrast-100 2xl:hover:scale-125 transition-all ease-in-out delay-75 h-11 cursor-pointer"
            >
              <img className="h-6 w-6" src={item.icon} />
            </a>
          );
        })}
      </div>
    </div>
  );
}

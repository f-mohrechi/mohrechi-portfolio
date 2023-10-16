import React, { useState } from "react";

export default function MenuSideBar() {
  const [sections, setSections] = useState([
    { icon: "/icons/home.svg", title: "home", link: "#" },
    { icon: "/icons/about.svg", title: "about", link: "#" },
    { icon: "/icons/company.svg", title: "experience", link: "#" },
    { icon: "/icons/code.svg", title: "projects", link: "#" },
    { icon: "/icons/book.svg", title: "education", link: "#" },
    { icon: "/icons/call.svg", title: "contact", link: "#" },
  ]);

  return (
    <div className="bg-box-back h-[95vh] w-full rounded-2xl p-6 sticky top-8">
      <div className="mb-36">theme</div>

      <div className="flex flex-col justify-around h-2/4">
        {sections.map((item, index) => {
          return (
            <a
              href={item.link}
              className="flex items-center justify-center rounded-lg contrast-0 hover:contrast-100 hover:scale-125 transition-all ease-in-out delay-75 h-11 cursor-pointer"
            >
              <img src={item.icon} />
            </a>
          );
        })}
      </div>
    </div>
  );
}

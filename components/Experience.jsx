import React, { useState } from "react";

export default function Experience() {
  const [exp, setExp] = useState([
    {
      company: "Elitive",
      role: "Front-End Developer",
      duration: "October 2023 - May 2023",
      explanation:
        "In my role as part of a team, I was responsible for implementing the user interface (UI). During my time in this company, I worked on a variety of projects, including shopping websites, admin panels, landing pages, and academic websites.",
    },
    {
      company: "Mann-E",
      role: "Front-End Developer",
      duration: "May 2023 - Feb 2024",
      explanation:
        "Built the frontend portion of vecentor.com. A generative AI that converts text to vector (SVG).",
    },
  ]);

  return (
    <div className="w-full">
      <h2 className="text-2xl sm:text-4xl font-semibold text-center pb-10">
        Experience
      </h2>

      <div className="h-full rounded-2xl px-6 dark:bg-white bg-box-back dark:shadow-md dark:shadow-zinc-200 shadow-md shadow-zinc-950">
        {exp.map((item, index) => {
          return (
            <div
              key={index}
              // className={`xl:grid xl:grid-cols-3 py-6 xl:gap-x-8`}
              className={`grid grid-cols-3 py-6 gap-x-8
              ${index >= exp.length - 1 ? "border-t border-t-light-gray" : ""}
              `}
            >
              <div className="border-l-2 border-l-light-gray pl-4 xl:border-l-0 xl:pl-0 mb-6 xl:mb-0">
                <p className="text-lg font-semibold pb-2 xl:pb-3">
                  {item.company}
                </p>
                <p className="bg-dark-orange dark:bg-lighter-orange text-light-orange text-sm px-3 py-1 rounded-lg max-w-fit">
                  {item.duration}
                </p>
              </div>

              <div className="col-span-2">
                <p className="text-lg font-semibold pb-2 xl:pb-3">
                  {item.role}
                </p>
                <p className="text-light-gray">{item.explanation}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

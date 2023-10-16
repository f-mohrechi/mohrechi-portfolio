import React, { useState } from "react";

export default function Experience() {
  const [exp, setExp] = useState([
    {
      company: "Elitive",
      role: "Junior Front-End Developer",
      duration: "Jan 1396 - Feb 1400",
      explanation:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc.",
    },
    {
      company: "",
      role: "Junior Front-End Developer",
      duration: "Jan 1396 - Feb 1400",
      explanation:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc.",
    },
  ]);

  return (
    <div className="w-full">
      <h2 className="text-4xl font-semibold text-center pb-10">Experience</h2>

      <div className="h-full rounded-2xl px-6 bg-box-back">
        {exp.map((item, index) => {
          return (
            <div
              className={`grid grid-cols-3 py-6 ${
                index >= exp.length - 1 ? "border-t border-t-light-gray" : ""
              }`}
            >
              <div>
                <p className="text-lg font-semibold pb-3">{item.company}</p>
                <p className="bg-dark-orange text-light-orange text-sm px-3 py-1 rounded-2xl max-w-fit">
                  {item.duration}
                </p>
              </div>

              <div className="col-span-2">
                <p className="text-lg font-semibold pb-3">{item.role}</p>
                <p className="text-light-gray">{item.explanation}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

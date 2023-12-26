import React from "react";
export default function ProjectBox({ data }) {
  return (
    <div className="h-full w-full flex flex-col justify-between rounded-2xl dark:bg-white bg-box-back shadow-xl shadow-zinc-950 border dark:shadow-zinc-300 dark:border-0 border-zinc-950">
      <div className="flex-1">
        <div className="flex justify-center items-center h-56">
          <img
            alt=""
            className="w-full h-full rounded-tl-2xl rounded-tr-2xl contrast-50 dark:contrast-75 brightness-75 hover:brightness-100 hover:contrast-100"
            src={data.img ? data.img : "/icons/camera.svg"}
          />
        </div>

        <div className="px-6 pt-5">
          <div>
            <p className="text-lg font-medium">{data.name}</p>
            <p className="text-light-gray">{data.company}</p>
          </div>

          <div className="flex items-center flex-wrap py-3">
            {data.techs.map((item, index) => {
              return (
                <div
                  key={index}
                  className="mr-2 my-1 px-2 md:px-3 py-1 rounded-2xl bg-light-gray dark:bg-lighter-orange text-hero-back text-sm font-medium"
                >
                  <p>{item}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="flex items-center flex-wrap px-6 pb-5">
        {data.repoLink && (
          <a
            target="blank"
            href={data.repoLink}
            className="max-w-max bg-light-orange text-box-back border border-light-orange font-medium px-3 py-1 rounded-lg w-full hover:brightness-75 hover:text-white mr-5 mt-3"
          >
            Github Repo
          </a>
        )}

        {data.demoLink && (
          <a
            target="blank"
            href={data.demoLink}
            className="max-w-max bg-transparent text-light-orange border border-light-orange font-medium px-3 py-1 rounded-lg w-full hover:bg-dark-orange hover:border-dark-orange mt-3"
          >
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
}

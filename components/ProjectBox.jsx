import React from "react";
import Image from "next/image";
export default function ProjectBox({ data }) {
  return (
    <a
      href={data.link}
      className="p-6 h-full w-full rounded-2xl bg-box-back shadow-xl shadow-zinc-950 border border-zinc-950 transition-all ease-in-out delay-75 cursor-pointer"
    >
      <div className="flex justify-center items-center">
        <img
          className=" h-56 rounded-lg contrast-50 brightness-75 hover:brightness-100 hover:contrast-100"
          src={data.img ? data.img : "/icons/camera.svg"}
        />
      </div>

      <div className="py-3">
        <div>
          <p className="text-lg font-medium">{data.name}</p>
          <p className="text-light-gray">{data.company}</p>
        </div>

        <div className="flex items-center py-3">
          {data.techs.map((item, index) => {
            return (
              <div className="mr-2 px-3 py-1 rounded-full bg-light-gray text-hero-back font-medium">
                <p>{item}</p>
              </div>
            );
          })}
        </div>

        <div className="pt-3">
          <a
            href={data.repoLink}
            className="bg-light-orange text-box-back border border-light-orange font-medium px-3 py-1 rounded-lg w-full hover:brightness-75 hover:text-white"
          >
            Github Repo
          </a>
          <a
            href={data.demoLink}
            className="bg-transparent text-light-orange border border-light-orange font-medium px-3 py-1 rounded-lg w-full hover:bg-dark-orange hover:border-dark-orange ml-5"
          >
            Live Demo
          </a>
        </div>
      </div>
    </a>
  );
}

import React from "react";
import Image from "next/image";

export default function Profile() {
  return (
    <div className="dark:bg-light-pattern bg-dark-pattern bg-center bg-no-repeat bg-cover dark:shadow-md dark:shadow-zinc-200 w-full  rounded-2xl p-6 shadow-md shadow-zinc-950">
      <div className="xl:grid xl:grid-cols-2">
        <div className="xl:max-w-md">
          <h2 className="text-center xl:text-start text-3xl lg:text-3xl xl:text-4xl font-semibold">
            Innovative Front-End Developer Crafting Digital Experiences
          </h2>

          <p className="text-light-gray text-lg text-center xl:text-start py-8 md:py-10">
            I am a front-end developer with over 1 year of experience building
            responsive and interactive websites using React.js, Next.js,
            Tailwind CSS, etc. I have worked on several projects that involve
            creating dynamic user interfaces.
          </p>

          <div className="flex justify-center xl:justify-start">
            <a
              href="mailto:f.mohrechi@gmail.com"
              className="relative group cursor-pointer text-white text-lg overflow-hidden h-10 w-40 2xl:h-16 2xl:w-64 rounded-full bg-[#323232] dark:bg-[#989898] p-2 flex justify-center items-center font-semibold"
            >
              <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-40 h-40 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 dark:bg-[#d6d6d6] bg-[#1d1d1d]"></div>
              <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-32 h-32 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500  dark:bg-[#c1c1c1] bg-[#272727]"></div>
              <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-24 h-24 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 dark:bg-[#adadad] bg-[#313131] "></div>
              <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-14 h-14 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 dark:bg-[#848484] bg-[#444444]"></div>
              <p className="z-10 dark:text-dark-text">Let's Talk</p>
              <div className="flex justify-center items-center z-10 w-6 h-6 2xl:w-10 2xl:h-10 rounded-full dark:bg-dark-text ml-3">
                <img
                  className="z-10 w-4 2xl:w-6"
                  src="/icons/arrow-right.svg"
                  alt=""
                />
              </div>
            </a>
          </div>
        </div>

        <div className="hidden xl:flex xl:justify-end">
          <Image src="/images/hero-dev.svg" width={400} height={400} alt="" />
        </div>
      </div>
    </div>
  );
}

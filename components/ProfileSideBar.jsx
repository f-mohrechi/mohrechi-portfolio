import React, { useState } from "react";
import Image from "next/image";

export default function ProfileSideBar() {
  const [social, setSecial] = useState([
    {
      icon: "/icons/twitter.svg",
      name: "twitter",
      link: "https://twitter.com/mahi_mohrechi",
    },
    {
      icon: "/icons/linkedin.svg",
      name: "linkedin",
      link: "https://linkedin.com/in/faeze-mohrechi",
    },
    {
      icon: "/icons/github.svg",
      name: "github",
      link: "https://github.com/f-mohrechi",
    },
    {
      icon: "/icons/discord.svg",
      name: "discord",
      link: "https://discordapp.com/users/863859653507285012",
    },
    {
      icon: "/icons/instagram.svg",
      name: "instagram",
      link: "https://instagram.com/mahi_mohrechi",
    },
    {
      icon: "/icons/telegram.svg",
      name: "telegram",
      link: "https://t.me/mahi_mohrechi",
    },
  ]);

  const [contact, setContact] = useState([
    {
      title: "Email",
      contact: "f.mohrechi78@gmail.com",
      link: "mailto:f.mohrechi78@gmail.com",
    },
    ,
    { title: "Location", contact: "Tehran, Iran" },
    { title: "Languages", contact: "English, Persian" },
  ]);

  const [skills, setSkills] = useState([
    { title: "Languages", subtitles: ["JavaScript", "HTML"] },
    { title: "Frameworks", subtitles: ["React.js", "Next.js"] },
    { title: "State Managment", subtitles: ["Redux", "Context API"] },
    {
      title: "Style",
      subtitles: ["Styled Component", "TailwindCSS", "Bootstrap", "MUI", "css"],
    },
    { title: "version control", subtitles: ["Git (github, gitlab)"] },
  ]);

  return (
    <>
      <div className="dark:bg-white bg-box-back dark:shadow-md dark:shadow-zinc-200 h-[95vh] w-full rounded-2xl p-6 sticky top-8 shadow-md shadow-zinc-950">
        <div className="flex flex-col items-center">
          <div>
            <Image
              alt=""
              width={100}
              height={100}
              src="/images/faeze.jpg"
              className="rounded-full"
            />
          </div>
          <h2 className="text-lg font-semibold pt-5 pb-4">Faeze Mohrechi</h2>
          <p className="bg-dark-orange dark:bg-lighter-orange text-light-orange text-sm px-3 py-1 rounded-2xl">
            Front-end developer
          </p>
          <div className="flex justify-center pt-4">
            <button className="bg-light-orange text-box-back font-medium px-3 py-1 rounded-lg w-full hover:brightness-75 transition-all ease-in-out delay-75 hover:text-white">
              <a
                href="/files/Faeze-Mohrechi-cv.pdf"
                download={"Faeze-Mohrechi"}
                target="blank"
              >
                DOWNLOAD MY CV
              </a>
            </button>
          </div>

          <div className="flex items-center gap-x-6 py-8 w-full justify-center">
            {social.map((item, index) => {
              return (
                <a href={item.link} key={index} target="blank">
                  <img
                    alt=""
                    className="w-6 contrast-0 hover:contrast-100 transition-all ease-in-out delay-75"
                    src={item.icon}
                  />
                </a>
              );
            })}
          </div>

          <div className="w-full pb-4 border-b border-b-light-gray">
            {contact.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex justify-between items-center w-full py-1 gap-x-2"
                >
                  <p className="font-medium text-sm lg:text-base 2xl:text-base">
                    {item.title}
                  </p>
                  <a href={item.link} className="text-light-gray text-sm">
                    {item.contact}
                  </a>
                </div>
              );
            })}
          </div>
        </div>
        <div className="py-4">
          <h3 className="text-lg font-semibold">SKILLS</h3>

          <div>
            {skills.map((skill, index) => {
              return (
                <div
                  key={index}
                  className="flex items-center justify-between flex-wrap py-1"
                >
                  <p className="font-medium text-sm lg:text-base 2xl:text-base">
                    {skill.title}:
                  </p>
                  <div className="flex flex-wrap">
                    {skill.subtitles.map((item, index) => {
                      return (
                        <p
                          key={index}
                          className="text-light-gray text-sm lg:text-[15px] 2xl:text-base"
                        >
                          {item}
                          {index >= skill.subtitles.length - 1 ? "" : ","}{" "}
                          &nbsp;
                        </p>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

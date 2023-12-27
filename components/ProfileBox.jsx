import React, { useState } from "react";
import Image from "next/image";

export default function ProfileBox({ skills, contact }) {
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

  return (
    <>
      <div className="dark:bg-white bg-box-back dark:shadow-md dark:shadow-zinc-200 w-full rounded-2xl p-6 shadow-md shadow-zinc-950">
        <div className="sm:flex sm:justify-between sm:items-start  border-b border-b-light-gray pb-2">
          <div className="flex flex-col items-center mb-5 sm:mb-0 sm:block sm:w-2/5">
            <Image
              alt=""
              width={100}
              height={100}
              src="/images/faeze.jpg"
              className="rounded-full"
            />
            <h2 className="text-lg font-semibold pt-5 pb-3">Faeze Mohrechi</h2>
            <p className="bg-dark-orange dark:bg-lighter-orange text-light-orange text-sm px-3 py-1 rounded-lg max-w-max">
              Front-end developer
            </p>

            <button className="mt-3 bg-light-orange text-box-back text-sm font-medium px-3 py-1 rounded-lg max-w-max w-full hover:brightness-75 hover:text-white">
              <a
                href="/files/Faeze-Mohrechi-cv.pdf"
                download={"Faeze-Mohrechi"}
                target="blank"
              >
                DOWNLOAD MY CV
              </a>
            </button>
          </div>

          <div className="sm:w-3/5">
            <div className="flex items-center justify-around py-8 w-full">
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

            <div className="w-full">
              {contact.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="flex justify-between items-center w-full py-1 gap-x-2"
                  >
                    <p className="font-medium text-sm">{item.title}</p>
                    <p className="text-light-gray text-sm">{item.contact}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="pt-4">
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

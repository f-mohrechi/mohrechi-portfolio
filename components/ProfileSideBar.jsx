import React, { useState } from "react";
import Image from "next/image";

export default function ProfileSideBar({ skills, contact }) {
  const [social, setSocial] = useState([
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
      <div className="dark:bg-white bg-box-back dark:shadow-md dark:shadow-zinc-200 h-[96vh] w-full rounded-2xl py-6 pl-6 pr-3 sticky top-8 shadow-md shadow-zinc-950">
        <div className="h-[90vh] overflow-y-auto pr-3">
          <div className="flex flex-col items-center">
            <div>
              <Image
                alt=""
                width={100}
                height={100}
                src="/images/mahi.jpg"
                className="rounded-full"
              />
            </div>
            <h2 className="text-lg font-semibold pt-3 pb-4">Mahi Mohrechi</h2>
            <p className="bg-dark-orange dark:bg-lighter-orange text-light-orange text-sm px-3 py-1 rounded-2xl">
              Front-end Developer
            </p>
            <div className="flex justify-center pt-4">
              <button className="bg-light-orange text-box-back font-medium px-3 py-1 rounded-lg w-full hover:brightness-75 transition-all ease-in-out delay-75 hover:text-white">
                <a
                  href="/files/Mahi Mohrechi - Frontend Developer.pdf"
                  download={"Mahi-Mohrechi"}
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
              <div className="flex justify-between items-center w-full py-1 gap-x-2">
                <p className="text-sm lg:text-base 2xl:text-base">Email</p>
                <a
                  href={"https://f.mohrechi@gmail.com"}
                  target="blank"
                  className="text-light-gray text-sm cursor-pointer"
                >
                  f.mohrechi78.@gmail.com
                </a>
              </div>
              {contact.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="flex justify-between items-center w-full py-1 gap-x-2"
                  >
                    <p className="text-sm lg:text-base 2xl:text-base">
                      {item.title}
                    </p>
                    <a
                      href={item.link}
                      target="blank"
                      className="text-light-gray text-sm cursor-pointer"
                    >
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
                    <p className="text-sm lg:text-base 2xl:text-base">
                      {skill.title}:
                    </p>
                    <div className="flex flex-wrap">
                      {skill.subtitles.map((item, index) => {
                        return (
                          <p key={index} className="text-light-gray text-sm">
                            {item}
                            {index >= skill.subtitles.length - 1
                              ? ""
                              : ","}{" "}
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
      </div>
    </>
  );
}

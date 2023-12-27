import React from "react";
import ThemeToggle from "./ToggleTheme";
import Image from "next/image";

export default function Header() {
  return (
    <div className="dark:bg-white bg-box-back dark:shadow-md dark:shadow-zinc-200 w-full rounded-full p-3 shadow-md shadow-zinc-950">
      <div className="flex justify-between items-center">
        <div className="dark:bg-light-gray px-3 py-3 rounded-xl">
          <Image src={"/images/FM2.png"} height={30} width={30} alt="" />
        </div>

        <div>
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
}

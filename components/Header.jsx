import React from "react";
import ThemeToggle from "./ToggleTheme";
import Image from "next/image";

export default function Header() {
  return (
    <div className="dark:bg-white bg-box-back dark:shadow-md dark:shadow-zinc-200 w-full rounded-full p-6">
      <div className="flex justify-between items-center">
        <div className="dark:bg-light-gray px-3 py-2 rounded-xl">
          <Image src={"/images/fm2.png"} height={30} width={30} />
        </div>

        <div>
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
}

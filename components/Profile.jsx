import React from "react";
import Image from "next/image";

export default function Profile() {
  return (
    <div className="profile-back w-full xl:h-[430px] rounded-2xl p-6">
      <div className="xl:grid xl:grid-cols-2">
        <div className="xl:max-w-md">
          <h2 className="text-center xl:text-start text-3xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-semibold">
            I design products that delight and inspire people.
          </h2>

          <p className="text-light-gray text-lg text-center xl:text-start py-8 md:py-10">
            A Product Designer and Visual Developer in SF. I specialize in UI/UX
            Design, Responsive Web Design, and Visual Development.
          </p>

          <div className="flex justify-center xl:justify-start">
            <button class="relative group cursor-pointer text-white text-lg overflow-hidden h-10 w-40 2xl:h-16 2xl:w-64 rounded-full bg-[#323232] p-2 flex justify-center items-center font-semibold">
              <div class="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-40 h-40 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-[#1d1d1d]"></div>
              <div class="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-32 h-32 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500  bg-[#272727]"></div>
              <div class="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-24 h-24 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-[#313131] "></div>
              <div class="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-14 h-14 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-[#444444]"></div>
              <p class="z-10">Let's Talk</p>
              <img className="pl-3 z-10" src="/icons/arrow-right.svg" />
            </button>
          </div>
        </div>

        <div className="hidden xl:flex xl:justify-end">
          <Image src="/images/faeze.jpg" width={250} height={250} />
        </div>
      </div>
    </div>
  );
}

import React from "react";

export default function Education() {
  return (
    <div className="w-full">
      <h2 className="text-2xl sm:text-4xl font-semibold text-center pb-10">
        Education
      </h2>

      <div className="h-full rounded-2xl p-6 bg-box-back">
        <div className="xl:grid xl:grid-cols-3 py-6 xl:gap-x-8">
          <div className="border-l-2 border-l-light-gray pl-4 xl:border-l-0 xl:pl-0 mb-6 xl:mb-0">
            <p className="text-lg font-semibold pb-2 xl:pb-3">
              Islamic Azad University of Karaj
            </p>
            <p className="bg-dark-orange text-light-orange text-sm px-3 py-1 rounded-2xl max-w-fit">
              Jan 1396 - Feb 1400
            </p>
          </div>

          <div className="col-span-2">
            <p className="text-lg font-semibold pb-2 xl:pb-3">
              Bachelor of Applied Chemistry
            </p>
            <p className="text-light-gray">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
              dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar
              quisque sed amet, nulla nunc.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
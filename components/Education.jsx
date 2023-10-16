import React from "react";

export default function Education() {
  return (
    <div className="w-full">
      <h2 className="text-4xl font-semibold text-center pb-10">Education</h2>

      <div className="h-full rounded-2xl p-6 bg-box-back">
        <div className="grid grid-cols-3">
          <div>
            <p className="text-lg font-semibold pb-3">
              Islamic Azad University of Karaj
            </p>
            <p className="bg-dark-orange text-light-orange text-sm px-3 py-1 rounded-2xl max-w-fit">
              Jan 1396 - Feb 1400
            </p>
          </div>

          <div className="col-span-2">
            <p className="text-lg font-semibold pb-3">
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

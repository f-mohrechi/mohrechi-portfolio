import React from "react";

export default function ContactMe() {
  return (
    <div className="w-full">
      <h2 className="text-2xl sm:text-4xl font-semibold text-center pb-10">
        Get In Touch
      </h2>

      <div className="h-full rounded-2xl p-6 bg-box-back">
        <form action="">
          <div className="sm:flex sm:items-center sm:justify-between w-full">
            <div className="w-full sm:mr-8">
              <label className="">Name</label>
              <input
                className="mt-2 w-full bg-[#131313] rounded-md text-white px-4 py-2 placeholder:text-light-gray outline-none"
                type="text"
                placeholder="Enter your name"
              />
            </div>

            <div className="w-full mt-5 sm:mt-0 sm:ml-8">
              <label>Email</label>
              <input
                className="mt-2 w-full bg-[#131313] rounded-md text-white px-4 py-2 placeholder:text-light-gray outline-none"
                type="text"
                placeholder="Enter your email"
              />
            </div>
          </div>

          <div className="my-5">
            <label>Subject</label>
            <input
              className="mt-2 w-full bg-[#131313] rounded-md text-white px-4 py-2 placeholder:text-light-gray outline-none"
              type="text"
              placeholder="What is your message subject?"
            />
          </div>

          <div>
            <label>Message</label>
            <textarea
              className="mt-2 w-full bg-[#131313] rounded-md text-white px-4 py-2 placeholder:text-light-gray outline-none"
              type="text-area"
              placeholder="At least 150 characters"
            ></textarea>
          </div>
        </form>

        <button className="bg-transparent text-light-orange border border-light-orange font-medium px-3 py-3 mt-5 rounded-lg w-48 hover:bg-dark-orange hover:border-dark-orange">
          SEND MESSAGE
        </button>
      </div>
    </div>
  );
}

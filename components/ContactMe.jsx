import React, { useState } from "react";
import axios from "axios";

export default function ContactMe() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const url = "https://contact.f-mohrechi.com/create";
  const submitForm = async (name, subject, email, message) => {
    try {
      const response = await axios.post(
        url,
        {
          name,
          subject,
          email,
          message,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await submitForm(name, subject, email, message);
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };

  return (
    <div className="w-full">
      <h2 className="text-2xl sm:text-4xl font-semibold text-center pb-10">
        Get In Touch
      </h2>

      <div className="h-full rounded-2xl p-6 dark:bg-white bg-box-back dark:shadow-md dark:shadow-zinc-200 shadow-md shadow-zinc-950">
        <form action="" onSubmit={handleSubmit}>
          <div className="sm:flex sm:items-center sm:justify-between w-full">
            <div className="w-full sm:mr-8">
              <label className="">Name</label>
              <input
                autoComplete="none"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="mt-2 w-full bg-[#131313] dark:bg-light-app rounded-md text-white px-4 py-2 placeholder:text-light-gray dark:text-[#131313] outline-none"
                type="text"
                placeholder="Enter your name"
              />
            </div>

            <div className="w-full mt-5 sm:mt-0 sm:ml-8">
              <label>Email</label>
              <input
                autoComplete="none"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="mt-2 w-full bg-[#131313] dark:bg-light-app rounded-md text-white px-4 py-2 placeholder:text-light-gray dark:text-[#131313] outline-none"
                type="text"
                placeholder="Enter your email"
              />
            </div>
          </div>

          <div className="my-5">
            <label>Subject</label>
            <input
              name="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="mt-2 w-full bg-[#131313] dark:bg-light-app rounded-md text-white px-4 py-2 placeholder:text-light-gray dark:text-[#131313] outline-none"
              type="text"
              placeholder="What is your message subject?"
            />
          </div>

          <div>
            <label>Message</label>
            <textarea
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="mt-2 w-full bg-[#131313] dark:bg-light-app rounded-md text-white px-4 py-2 placeholder:text-light-gray dark:text-[#131313] outline-none"
              type="text-area"
              placeholder="How can I help you?"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-transparent text-light-orange border border-light-orange font-medium px-3 py-3 mt-5 rounded-lg w-48 hover:bg-dark-orange hover:border-dark-orange"
          >
            SEND MESSAGE
          </button>
        </form>
      </div>
    </div>
  );
}

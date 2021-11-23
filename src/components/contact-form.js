import React from "react";

const ContactForm = () => {
  const formSubmitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div className="shadow-2xl py-4 px-2">
      <form onSubmit={formSubmitHandler}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 px-4">
          <input
            type="text"
            placeholder="Your Name"
            className="py-2 px-2 border border-gray-400 focus:border-blue-600 focus:outline-none"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="py-2 px-2 border border-gray-400 focus:border-blue-600 focus:outline-none"
          />
        </div>
        <div className="py-4 px-4">
          <input
            type="text"
            placeholder="Subject"
            className="py-2 px-2 border w-full border-gray-400 focus:border-blue-600 focus:outline-none"
          />
        </div>
        <div className="py-4 px-4">
          <textarea
            placeholder="Message"
            className="py-2 px-2 border w-full border-gray-400 focus:border-blue-600 focus:outline-none"
            rows="8"
          ></textarea>
        </div>
        <div className="flex flex-row items-center py-4 px-4 justify-center">
          <input
            type="submit"
            value="Send Message"
            className="bg-yellow-500 hover:opacity-60 transition duration-200 ease-in-out rounded-md py-2 px-6  text-center font-semibold text-lg text-white"
          />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;

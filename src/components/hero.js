import React from "react";
import { FaAngleDown } from "react-icons/fa";
const Hero = () => {
  return (
    <section className="h-screen" id="home">
      <div className="fixed w-full bg-black top-0 -z-10">
        <img
          src="/images/hero-bg.jpg"
          alt="hero"
          className="w-full h-screen object object-cover"
        />
      </div>
      <div className="w-full h-screen bg-black fixed top-0 -z-1 bg-opacity-50"></div>
      <div className="container mx-auto w-4/5 text-white py-40 flex flex-col justify-center items-center my-auto">
        <h1 className="font-brand text-5xl md:text-7xl py-8">Laura Thompson</h1>
        <p className="text-md md:text-lg text-center py-4 tracking-wider uppercase font-semibold">
          I'm a Professional Photographer In New York City
        </p>
        <div className="py-4">
          <a href="#about" className="cursor-pointer">
            <FaAngleDown className="text-5xl animate-bounce ease-linear hover:text-yellow-400" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

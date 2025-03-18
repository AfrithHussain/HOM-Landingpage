import React from "react";
import business from "../assets/business.jpg";
import logo from "../assets/logo.svg";
import { LazyLoadImage } from "react-lazy-load-image-component";

const HeroSection = () => {
  return (
    <div className="relative h-screen flex flex-col items-center justify-center text-white overflow-hidden">
      {/* Background Image */}
      <img
        src={business}
        alt="Business Background"
        className="absolute w-full h-full object-cover object-top"
      />

      {/* Overlay Tint */}
      <div className="absolute inset-0 bg-black bg-opacity-50 tint"></div>

      {/* Header with Logo and Name */}
      <div className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between p-6">
        <div className="flex items-center">
          <LazyLoadImage
            src={logo}
            alt="Company Logo"
            className="h-10 md:h-12 w-auto"
          />
          <span className="ml-3 text-xl md:text-2xl font-bold">
            BizSolutions
          </span>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-3xl md:text-4xl xl:text-5xl font-semibold mb-6">
          Empowering Your Business with Expert Solutions
        </h1>
        <p className="text-xs md:text-base mb-8 py-3 mx-auto">
          We provide tailored services to help your business grow, innovate, and
          succeed. From consulting to implementation, we’ve got you covered.
        </p>

        <div className="flex gap-4 justify-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-3 md:px-6 text-xs md:text-base rounded-lg transition duration-300">
            Explore Our Services
          </button>
          <button className="bg-transparent border border-white hover:bg-white hover:text-black px-3 md:px-6 text-xs md:text-base text-white font-semibold py-3 rounded-lg transition duration-300">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

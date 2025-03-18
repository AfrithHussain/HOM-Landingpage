import React from "react";
import { FaRobot, FaRocket } from "react-icons/fa";
import { IoSearchOutline, IoCodeSlash } from "react-icons/io5";
import { RiRobot3Line } from "react-icons/ri";
import { PiPaintBrushBold } from "react-icons/pi";
import { GoTasklist, GoRocket } from "react-icons/go";

const services = [
  {
    id: 1,
    title: "Web Development",
    description: "We build responsive and scalable web applications.",
    icon: <IoCodeSlash className="w-10 h-10 mb-4 text-blue-500" />,
  },
  {
    id: 2,
    title: "SEO Optimization",
    description: "Improve your website ranking on search engines.",
    icon: <IoSearchOutline className="w-10 h-10 mb-4 text-blue-500" />,
  },
  {
    id: 3,
    title: "UI/UX Design",
    description: "Design beautiful and user-friendly interfaces.",
    icon: <PiPaintBrushBold className="w-10 h-10 mb-4 text-blue-500" />,
  },
  {
    id: 4,
    title: "Task Management",
    description: "Unlimited tasks for your most important applications.",
    icon: <GoTasklist className="w-10 h-10 mb-4 text-blue-500" />,
  },
  {
    id: 5,
    title: "Automation",
    description: "Set it, and forget it. Automate your workflow.",
    icon: <RiRobot3Line className="w-10 h-10 mb-4 text-blue-500" />,
  },

  {
    id: 6,
    title: "Fast Performance",
    description: "The fastest response times in the industry.",
    icon: <GoRocket className="w-10 h-10 mb-4 text-blue-500" />,
  },
];

const ServiceCards = () => {
  return (
    <div className="py-12 ">
      <h1 className="text-4xl text-center font-semibold mb-8 text-gray-800">
        Our Services
      </h1>
      <div className="flex flex-wrap justify-center gap-10">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-white w-96 p-6 rounded-lg shadow-lg text-center hover:shadow-xl cursor-pointer hover:scale-105  transition-shadow duration-300"
          >
            <div className="flex justify-center">{service.icon}</div>
            <h3 className="text-2xl font-semibold  mb-4">{service.title}</h3>
            <p className="text-neutral-500 text-sm ">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceCards;

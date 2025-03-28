import React, { useState } from "react";
import Contact from "../assets/Contact.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    alert("Thank you for contacting us!");
  };

  return (
    <div className="mt-24 px-4 md:px-8 lg:px-16">
      <h2 className="text-4xl font-bold mb-6 text-center text-gray-800 ">
        Contact Us
      </h2>

      <div className="flex mt-10 flex-col lg:flex-row items-center justify-center gap-8">
        <div className="hidden lg:block w-1/2  justify-center">
          <LazyLoadImage
            src={Contact}
            alt="Contact"
            className="max-w-[78%] lg:max-w-full rounded-lg shadow-lg object-cover"
          />
        </div>

        <div className="w-full lg:w-1/2">
          <form
            onSubmit={handleSubmit}
            className="max-w-lg mx-auto p-6 md:p-8 bg-white rounded-lg shadow-lg"
          >
            <div className="mb-4">
              <label className="block text-neutral-700">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border border-neutral-200 rounded outline-none ring-2 ring-neutral-300 focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-neutral-700">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border border-neutral-200 rounded outline-none ring-2 ring-neutral-300 focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-neutral-700">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 border border-neutral-200 rounded outline-none ring-2 ring-neutral-300 focus:ring-blue-500"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-3 rounded hover:bg-blue-600 transition duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;

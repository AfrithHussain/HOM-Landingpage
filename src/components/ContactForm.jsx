import React, { useState } from "react";
import Contact from "../assets/contact.jpg";

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
    <div className="mt-24">
          <h2 className="text-4xl font-bold mb-6 text-center text-gray-800">Contact Us</h2>
        <div className="flex flex-col lg:flex-row items-center justify-evenly  gap-8 mx-32">
           
      {/* Contact Image - Hidden on small screens */}
      <div className="hidden lg:block w-1/2">
        <img src={Contact} alt="Contact" className="w-[80%]  rounded-lg shadow-lg" />
      </div>

      {/* Contact Form */}
      <div className="w-full lg:w-1/2">
   
        <form
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto p-8 bg-white rounded-lg shadow-lg"
        >
          <div className="mb-4">
            <label className="block text-neutral-700">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border border-neutral-100 rounded ring-2 ring-neutral-200 outline-none"
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
              className="w-full p-2 border rounded outline-none border-neutral-100 ring-2 ring-neutral-200"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-neutral-700">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-2 border rounded outline-none border-neutral-100 ring-2 ring-neutral-200"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 cursor-pointer"
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

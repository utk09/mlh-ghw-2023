import React from "react";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="relative overflow-hidden bg-blue-700 py-4 sm:py-16">
      <h1 className="text-center text-3xl font-semibold text-blue-100">Footer</h1>
      <div className="flex justify-center">
        <p className="text-slate-100"> <FaGithub size={28} /> </p>
      </div>
      <p className="text-center text-xl font-normal text-blue-50">This is a job board website</p>
    </div>
  );
};

export default Footer;
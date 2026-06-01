import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div
      id="Footer"
      className="flex justify-around bg-[#465697] text-white p-10 md:p-12 items-center"
    >
      <div>
        <h1 className="text-2xl md:text-6xl font-bold">Contact</h1>
        <h3 className="text-sm md:text-2xl font-normal">Feel to reach out</h3>
      </div>
      <ul className="text-sm md:text-xl">
        <li className="flex gap-1 items-center">
          <MdOutlineEmail size={20} />
          rahulpatel508882@gmail.com
        </li>
        <li className="flex gap-1 items-center">
          <CiLinkedin size={20} />
          linkedin.com/in/rahul-patel-721512307
        </li>
        <li className="flex gap-1 items-center">
          <FaGithub size={20} />
          https://github.com/rahulpatel508882-cyber
        </li>
      </ul>
    </div>
  );
};

export default Footer;

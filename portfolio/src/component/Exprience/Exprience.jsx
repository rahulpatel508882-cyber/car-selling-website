import React from "react";
import { FaCss3, FaFigma, FaHtml5, FaJs, FaReact } from "react-icons/fa";
import { SiRedis } from "react-icons/si";
import { FaGoogle } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";

const Exprience = () => {
  return (
    <div id="Exprience" className="p-10 md:p-24">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Exprience</h1>
      <div className="flex flex-wrap items-center justify-around">
        <div className="flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10">
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaHtml5 color="#E34F26" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaCss3 color="#E34F26" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaFigma color="#E34F26" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaJs color="#E34F26" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiRedis color="#E34F26" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaGoogle color="#E34F26" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiMongodb color="#E34F26" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaReact color="#E34F26" size={50} />
          </span>
        </div>

        <div>
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center">
            <span className="text-white">
              <h2 className="leading-tight">Software Developer</h2>
              <p className="text-sm leading-tight font-thin">Graduated 2025</p>
              <ul className="text-sm p-3 list-disc list-inside">
                <li>Work as a Web Development</li>
                <li>Fresher Web Development</li>
              </ul>
            </span>
          </div>

          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center">
            <span className="text-white">
              <h2 className="leading-tight">Software Developer</h2>
              <p className="text-sm leading-tight font-thin">Graduated 2025</p>
              <ul className="text-sm p-3 list-disc list-inside">
                <li>Work as a Web Development</li>
                <li>Fresher Web Development</li>
              </ul>
            </span>
          </div>

          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center">
            <span className="text-white">
              <h2 className="leading-tight">Software Developer</h2>
              <p className="text-sm leading-tight font-thin">Graduated 2025</p>
              <ul className="text-sm p-3 list-disc list-inside">
                <li>Work as a Web Development</li>
                <li>Fresher Web Development</li>
              </ul>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exprience;

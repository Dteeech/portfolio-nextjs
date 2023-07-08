import Image from "next/image";
import Link from "next/link";
import React from "react";
import arrow from "../public/assets/icons8-flèche-bas-50.png";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

const Main = () => {
  return (
    <div id="main" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto px-2 sm:px-4 md:px-8 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600 ">
            Et si on parlait web ?
          </p>
          <h1 className="py-4 text-gray-700 text-xl sm:text-4xl">
            Bonjour, je m'appelle <span className="text-[#5651e5]">Isaac</span>
          </h1>
          <h2 className="py-4 text-gray-700 text-xl sm:text-4xl animate-typing overflow-hidden whitespace-nowrap font-mono text-2xl font-bold ">
            Je suis développeur front-end
          </h2>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            React et Node sont mes outils de prédilection. Je développe aussi des sites web à l'aide de CMS. Actuellement je suis
            en alternance chez Passedevant pour développer mes compétences sur le terrain.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <a
              href="https://www.linkedin.com/in/isaac-marshall-106660227/"
              target="_blank"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursors-pointer hover:scale-125 ease-in duration-300">
                <FaLinkedinIn className="text-[#5651e5]" />
              </div>
            </a>
            <a href="https://github.com/Dteeech" target="_blank">
              <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursors-pointer hover:scale-125 ease-in duration-300">
                <FaGithub className="text-[#5651e5]" />
              </div>
            </a>
            <a href="mailto:isaak.marshall6@gmail.com" target="_blank">
              <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursors-pointer hover:scale-125 ease-in duration-300">
                <AiOutlineMail className="text-[#5651e5]" />
              </div>
            </a>
          </div>
          <Link href="#about">
            <div className="flex items-center mt-20 justify-center cursor-pointer hover:scale-125 ease-in duration-300">
              <Image src={arrow} width="50" height="50" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Main;

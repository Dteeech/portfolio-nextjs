import Image from "next/image";
import htmlImage from "../public/assets/skills/icons8-html-48.png";
import cssImage from "../public/assets/skills/icons8-css-48.png";
import figmaImage from "../public/assets/skills/icons8-figma-48.png";
import githubImage from "../public/assets/skills/icons8-github-64.png";
import jsImage from "../public/assets/skills/icons8-js-48.png";
import MySQLImage from "../public/assets/skills/icons8-mysql-50.png";
import netlifyImage from "../public/assets/skills/icons8-netlify-a-cloud-computing-company-that-offers-hosting-and-serverless-backend-services-for-static-websites.-48.png";
import nodeImage from "../public/assets/skills/icons8-node-js-48.png";
import reactImage from "../public/assets/skills/icons8-react-100.png";
import tailwindcssImage from "../public/assets/skills/icons8-tailwindcss-48.png";
import typescriptImage from "../public/assets/skills/icons8-typescript-48.png";
import vscodeImage from "../public/assets/skills/icons8-visual-studio-48.png";
import wordpressImage from "../public/assets/skills/icons8-wordpress-48.png";
import nextjsImage from "../public/assets/skills/nextjs-icon.png";

import React from "react";

const Skills = () => {
  return (
    <section id="skills" className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Mes skills
        </p>
        <h2 className="py-4">Ce que je maîtrise (pour l'instant)</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 shadow-lg rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto ">
                <Image
                  src={htmlImage}
                  alt="/"
                  width="48"
                  height="48"
                />
              </div>
              <div className=" flex flex-col items-center justify-center">
                <h3>HTML</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-lg rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto ">
                <Image
                  src={cssImage}
                  alt="/"
                  width="48"
                  height="48"
                />
              </div>
              <div className=" flex flex-col items-center justify-center">
                <h3>CSS</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-lg rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto ">
                <Image
                  src={figmaImage}
                  alt="/"
                  width="48"
                  height="48"
                />
              </div>
              <div className=" flex flex-col items-center justify-center">
                <h3>Figma</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-lg rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto ">
                <Image
                  src={jsImage}
                  alt="/"
                  width="48"
                  height="48"
                />
              </div>
              <div className=" flex flex-col items-center justify-center">
                <h3>Javascript</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-lg rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto ">
                <Image
                  src={reactImage}
                  alt="/"
                  width="48"
                  height="48"
                />
              </div>
              <div className=" flex flex-col items-center justify-center">
                <h3>React</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-lg rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto ">
                <Image
                  src={nodeImage}
                  alt="/"
                  width="48"
                  height="48"
                />
              </div>
              <div className=" flex flex-col items-center justify-center">
                <h3>Node</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-lg rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto ">
                <Image
                  src={MySQLImage}
                  alt="/"
                  width="48"
                  height="48"
                />
              </div>
              <div className=" flex flex-col items-center justify-center">
                <h3>MySQL</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-lg rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto ">
                <Image
                  src={typescriptImage}
                  alt="/"
                  width="48"
                  height="48"
                />
              </div>
              <div className=" flex flex-col items-center justify-center">
                <h3>Typescript</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-lg rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto ">
                <Image
                  src={tailwindcssImage}
                  alt="/"
                  width="48"
                  height="48"
                />
              </div>
              <div className=" flex flex-col items-center justify-center">
                <h3>Tailwind css</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-lg rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto ">
                <Image
                  src={wordpressImage}
                  alt="/"
                  width="48"
                  height="48"
                />
              </div>
              <div className=" flex flex-col items-center justify-center">
                <h3>WordPress</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-lg rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto ">
                <Image
                  src={githubImage}
                  alt="/"
                  width="48"
                  height="48"
                />
              </div>
              <div className=" flex flex-col items-center justify-center">
                <h3>Github</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-lg rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto ">
                <Image
                  src={nextjsImage}
                  alt="/"
                  width="48"
                  height="48"
                />
              </div>
              <div className=" flex flex-col items-center justify-center">
                <h3>Next.js</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-lg rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto ">
                <Image
                  src={netlifyImage}
                  alt="/"
                  width="48"
                  height="48"
                />
              </div>
              <div className=" flex flex-col items-center justify-center">
                <h3>Netlify</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-lg rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto ">
                <Image
                  src={vscodeImage}
                  alt="/"
                  width="48"
                  height="48"
                />
              </div>
              <div className=" flex flex-col items-center justify-center">
                <h3>Visual studio code</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

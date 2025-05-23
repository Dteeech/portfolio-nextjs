import React from "react";
import Link from "next/link";
import Image from "next/image";

const   ProjectItem = ({ title, backgroundImg, projectUrl, description }) => {
  return (
    <div>
      <div className=" relative flex items-center justify-center min-h-[350px] w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
        <Image
          className=" rounded-xl object-cover group-hover:opacity-10 p-4 rounded-xl"
          src={backgroundImg}
          alt={`extrait du projet ${title}: ${description}`}
          fill
        />
        <div className="hidden py-5 group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <h3 className="text-2xl text-white tracking-wider text-center">
            {title}
          </h3>
          <p className="text-white text-center py-5 ">{description}</p>
          <Link href={projectUrl} target="_blank">
            <p className=" text-center rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
              Visiter
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;

import React from 'react'
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

const Main = () => {
  return (
    <div className="w-full h-screen text-center ">
        <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
            <div>
                <p className="uppercase text-sm tracking-widest text-gray-600 ">Ici ça dev !</p>
                <h1 className="py-4 text-gray-700">Bonjour, je m'appelle <span className="text-[#5651e5]">Isaac</span></h1>
                <h2 className="py-4 text-gray-700 animate-typing overflow-hidden whitespace-nowrap font-mono text-2xl font-bold ">Un développeur front-end</h2>
                <p className="py-4 text-gray-600 max-w-[70%] m-auto">Je suis un développeur web front-end Javascript, React et Node sont mes outils de prédilection. Actuellement je suis en recherche d'une alternance pour développer mes compétences de fullstack et de gestion de projet.</p>
                <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
                
                    <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursors-pointer hover:scale-110 ease-in duration-300">
                        <FaLinkedinIn />
                    </div>
                    <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursors-pointer hover:scale-110 ease-in duration-300">
                        <FaGithub />
                    </div>
                    <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursors-pointer hover:scale-110 ease-in duration-300">
                        <AiOutlineMail />
                    </div>
                    <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursors-pointer hover:scale-110 ease-in duration-300">
                        <BsFillPersonLinesFill />
                    </div>
                </div>
            </div>
        
        </div>
    </div>
  )
}

export default Main
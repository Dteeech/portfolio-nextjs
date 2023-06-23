import Image from "next/image";
import Link from "next/link";
import logo from "../public/assets/kisspng-web-development-software-developer-software-develo-5aebbdc316db90.5684285315253989790936.png";
import React, { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);
  return (
    <div
      className={
        shadow
          ? "fixed w-full h-20 shadow-xl z-[100] bg-[#ecf0f3]"
          : "fixed w-full h-20 z-1 bg-[#ecf0f3]"
      }
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Link href="#main">
          <Image src={logo} alt="/" width="80" height="30" />
        </Link>

        <div>
          <ul className="hidden md:flex">
            <Link href="#about">
              <li className="ml-10 text-sm uppercase hover:border-b ">
                A propos
              </li>
            </Link>
            <Link href="#skills">
              <li className="ml-10 text-sm uppercase hover:border-b">Skills</li>
            </Link>
            <Link href="#projects">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Projets
              </li>
            </Link>
            <Link href="#contact">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Contact
              </li>
            </Link>
          </ul>
          <div onClick={handleNav} className="md:hidden">
            <AiOutlineMenu size={35} />
          </div>
        </div>
      </div>
      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? "md:hidden fixed z-[100] left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <div>
                <Link href="#main">
                  <Image
                    src={logo}
                    alt="/"
                    width="55"
                    height="20"
                    cursor="pointer"
                  />
                </Link>
              </div>
              <div
                onClick={handleNav}
                className={
                  "rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
                }
              >
                <AiOutlineClose size={25} />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4">
              <p className="w-[85%] md:w-[90] py-4">
                Des projets, des questions ?
                <span className="text">contactez moi</span>
              </p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <Link href="#main">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Home
                </li>
              </Link>
              <Link href="#about">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  A propos
                </li>
              </Link>
              <Link href="#skills">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Skills
                </li>
              </Link>
              <Link href="#projects">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Projets
                </li>
              </Link>
              <Link href="#contact">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Contact
                </li>
              </Link>
            </ul>
            <div className="pt-40 z-[100] w-[100%]">
              <p className="uppercase tracking-widest text z-[100]">
                Et si on se connectait ?
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <a
                  href="https://www.linkedin.com/in/isaac-marshall-106660227/"
                  target="_blank"
                >
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursors-pointer hover:scale-105 ease-in duration-300">
                    <FaLinkedinIn />
                  </div>
                </a>
                <a href="https://github.com/Dteeech" target="_blank">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursors-pointer hover:scale-105 ease-in duration-300">
                    <FaGithub />
                  </div>
                </a>
                <a href="mailto:isaak.marshall6@gmail.com" target="_blank">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursors-pointer hover:scale-105 ease-in duration-300">
                    <AiOutlineMail />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

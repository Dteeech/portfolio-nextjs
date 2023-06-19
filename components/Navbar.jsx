import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineClose } from "react-icons/ai";

function Navbar() {
  return (
    <div className="fixed w-full h-20 shadow-xl z-[100]">
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Image
          src="/../public/assets/kisspng-web-development-software-developer-software-develo-5aebbdc316db90.5684285315253989790936.png"
          alt="/"
          width="125"
          height="50"
        />

        <div>
          <ul className="hidden md:flex">
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">
                A propos
              </li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">Skills</li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Projets
              </li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Contact
              </li>
            </Link>
          </ul>
          <div className="md:hidden">
            <AiOutlineClose size={35} />
          </div>
        </div>
      </div>
      <div className="fixed left-0 top-0 w-full h-screen bg-black/70">
        <div className="fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 eas-in duration-500">
          <div>
            <div >
              <Image
                src="/../public/assets/kisspng-web-development-software-developer-software-develo-5aebbdc316db90.5684285315253989790936.png"
                alt="/"
                width="85"
                height="35"
              />
            </div>
            <div>
                <AiOutlineClose size={25}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

import Image from "next/image";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import contactImg from "../public/assets/melinda-gimpel-5Ne6mMQtIdo-unsplash.jpg";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import Link from "next/link";

const Contact = () => {
  const form = useRef();
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    tel: "",
    message: "",
  });
  const resetForm = () => {
    setFormValues({
      name: "",
      email: "",
      tel: "",
      message: "",
    });
  };
  const sendEmail = (e) => {
    e.preventDefault();

    setFormValues({
      name: e.target.name.value,
      email: e.target.email.value,
      tel: e.target.tel.value,
      message: e.target.message.value,
    });

    resetForm();

    emailjs

      .sendForm(
        "service_pkosypm",
        "template_133ff6j",
        form.current,
        "2xaK-f3CjSVwhPX54"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div id="contact" className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Contact
        </p>
        <h2 className="py-4"> Des questions, des projets ?</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="lg:p-4 h-full">
              <div>
                <Image
                  src={contactImg}
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                  alt="/"
                />
              </div>
              <div className="">
                <h2 className="py-2">Isaac Marshall</h2>
                <p>Développeur Front-End</p>
                <p className="py-4">
                  {" "}
                  Je suis disponible pour discuter de vos projets ou pour
                  d'éventuelles propositions d'emploi. 😁
                </p>
              </div>
              <div>
                <p className="uppercase pt8">Mes réseaux👇🏽</p>

                <div className="flex items-center justify-between py-6">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursors-pointer hover:scale-125 ease-in duration-300">
                    <FaLinkedinIn className="text-[#5651e5]" />
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursors-pointer hover:scale-125 ease-in duration-300">
                    <FaGithub className="text-[#5651e5]" />
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursors-pointer hover:scale-125 ease-in duration-300">
                    <AiOutlineMail className="text-[#5651e5]" />
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursors-pointer hover:scale-125 ease-in duration-300">
                    <BsFillPersonLinesFill className="text-[#5651e5]" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
            <div className="p-4">
              <form ref={form} onSubmit={sendEmail}>
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label htmlFor="Name" className="uppercase text-sm py-2">
                      Nom Prénom
                    </label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                      name="name"
                      value={formValues.name}onChange={(e) =>
                      setFormValues({ ...formValues, name: e.target.value })
                    }
                    />
                  </div>
                  <div className="flex flex-col">
                    <label
                      htmlFor="telephone"
                      className="uppercase text-sm py-2"
                    >
                      Numéro de téléphone
                    </label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="tel"
                      name="tel"
                      value={formValues.tel}
                      onChange={(e) =>
                      setFormValues({ ...formValues, tel: e.target.value })
                    }
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label htmlFor="email" className="uppercase text-sm py-2">
                    Email
                  </label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="email"
                    name="email"
                    value={formValues.email}
                    onChange={(e) =>
                      setFormValues({ ...formValues, email: e.target.value })
                    }
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label htmlFor="message" className="uppercase text-sm py-2">
                    Message
                  </label>
                  <textarea
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    rows="10"
                    value={formValues.message}
                    type="comment"
                    name="message"
                    alt="Message"
                    onChange={(e) =>
                      setFormValues({ ...formValues, message: e.target.value })
                    }
                  ></textarea>
                </div>
                <button className="w-full p-4 text-gray-100 mt-4">
                  Envoyer le message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link href="#main">
            <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursors-pointer hover:scale-110 ease-in duration-300">
              <HiOutlineChevronDoubleUp className="text-[#5651e5]" size={30} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;

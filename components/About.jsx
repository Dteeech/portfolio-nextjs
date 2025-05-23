import React from "react";
import Image from "next/image";
import Link from "next/link";
import profilePic from "../public/assets/Passedevant-Isaac.jpg";
const About = () => {
  return (
    <section id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            À propos
          </p>
          <h2 className="py-4">Mon parcours</h2>

          <p className="py-2 text-gray-600">
            Depuis mes 18 ans, j’ai exploré divers secteurs professionnels, animé par une volonté constante d’apprendre et d’élargir mes compétences. C’est dans le développement web que j’ai finalement trouvé ma voie. Depuis maintenant 4 ans, je me suis reconverti avec passion dans ce domaine en perpétuelle évolution.
            </p>
             <p className="py-2 text-gray-600"></p>

            Titulaire d’un Bac+3 en conception, développement et intégration web, je poursuis actuellement mes études en Master 2, avec une spécialisation en gestion de projet digital 🚨spoiler alert🚨 : toujours dans le dev, mais côté pilotage !.. Afin
            de compléter mon cursus je suis à la recherche d'une alternance pour
            septembre d'une durée de 1 an. 
            <p>Par ailleurs, je continue à exercer en tant que développeur freelance. Je suis toujours disponible pour vous accompagner dans la création de vos sites vitrines, plateformes de réservation ou projets e-commerce.<strong> N’hésitez pas à me contacter !</strong>
              </p>
          
          <Link href="#projects">
            <p className="py-2 text-gray-600 underline cursor-pointer">
              Jetez un coup d'oeil à mes derniers projets en date
            </p>
          </Link>
        </div>
        <div className="w-full h-auto m-auto shadow-lg shadow-gray-400 rounded-xl flex items-center justify-center p-4 hovers:scale-105 ease-in duration-300  ">
          <Image
            className="rounded-xl"
            src={profilePic}
            width="400"
            height="400"
          />
        </div>
      </div>
    </section>
  );
};

export default About;

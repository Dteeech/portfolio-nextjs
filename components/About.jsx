import React from "react";
import Image from "next/image";
import Link from "next/link";
import profilePic from "../public/assets/profile-pic.png";
const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            À propos
          </p>
          <h2 className="py-4">Mon parcours</h2>
          <p className="py-2 text-gray-600">//En reconversion</p>
          <p className="py-2 text-gray-600">
            Depuis l'âge de 18 ans, j'explore différents domaines d'activité,
            cherchant à élargir mes compétences et à découvrir de nouvelles
            perspectives professionnelles. Toutefois, c'est dans le secteur du
            développement web que j'ai trouvé ma véritable passion. Au cours des
            deux dernières années, j'ai entrepris une reconversion pour me
            consacrer pleinement à cette discipline en constante évolution.
            Titulaire d'un bac +2 développeur intégrateur web, je poursuis mes
            études en bachelor 3 🚨spoiler alert🚨 : toujours dans le dev. Afin
            de compléter mon cursus je suis à la recherche d'une alternance pour
            septembre pour une durée de 1 an. Le rythme est de 2 semaines en
            entreprise et 1 semaine à l'école. À côté de cela je suis toujours
            développeur à mon compte et je suis toujours à l'écoute de vos
            projets de site vitrines ou de réservation.
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
    </div>
  );
};

export default About;

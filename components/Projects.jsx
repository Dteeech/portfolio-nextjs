import Image from "next/image";
import React from "react";
import pokedexImg from "../public/assets/projects/pokedex.png";
import retroGamesImg from "../public/assets/projects/retrogames.png";
import bintageImg from "../public/assets/projects/bintage.png";
import guilmaultImage from "../public/assets/projects/cg.jpeg";
import gmb from "../public/assets/projects/gmb.png"
import yoda from "../public/assets/projects/yoda.webp";
import Link from "next/link";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <main id="projects" className="w-full ">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className=" text-xl tracking-widest uppercase text-[#5651e5] ">
          Projets
        </p>
        <h2 className='"py-4 mb-4'>En ligne</h2>
        <div className="grid md:grid-cols-2 gap-8 -z-50">
          <ProjectItem

            title="Pokedex"
            backgroundImg={pokedexImg}
            projectUrl="https://rainbow-taffy-29e96d.netlify.app/"
            description={"React, JS, Typescript"}
          />

          <ProjectItem

            title="La galerie de Catherine"
            backgroundImg={guilmaultImage}
            projectUrl="https://guilmault-catherine.fr/"
            description={"Site vitrine d'exposition / WordPress"}
          />
          <ProjectItem

            title="GMB Post Genius"
            backgroundImg={gmb}
            projectUrl="https://gmb-post-genius.vercel.app"
            description={"Outils de génération de posts GMB"}
          />
          <ProjectItem

            title="Yoda specs"
            backgroundImg={yoda}
            projectUrl="#"
            description={"Outils de génération de spécifications fonctionnelles et techniques / outils en cours en développement"}
          />
        </div>
      </div>
    </main>
  );
};

export default Projects;

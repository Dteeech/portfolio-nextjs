import Image from "next/image";
import React from "react";
import pokedexImg from "../public/assets/projects/pokedex.png";
import retroGamesImg from "../public/assets/projects/retrogames.png";
import bintageImg from "../public/assets/projects/bintage.png";
import catherineGImg from "../public/assets/projects/guilmault-catherine.png";
import Link from "next/link";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id="projects" className="w-full ">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className=" text-xl tracking-widest uppercase text-[#5651e5] ">
          Projets
        </p>
        <h2 className='"py-4'>En ligne</h2>
        <div className="grid md:grid-cols-2 gap-8 -z-50">
          <ProjectItem
            title="Pokedex"
            backgroundImg={pokedexImg}
            projectUrl="https://rainbow-taffy-29e96d.netlify.app/"
            description={"Pokedex / React, JS, Typescript"}
          />
          <ProjectItem
            title="Retro_Games"
            backgroundImg={retroGamesImg}
            projectUrl="/retroGames"
            description={"(Pas encore déployé) E-market de jeux vidéos rétro / React, JS, Node"}
          />
          <ProjectItem
            title="Bin't'age 2.0"
            backgroundImg={bintageImg}
            projectUrl="https://bint-age.com/"
            description={"Site de réservation de prestations musicales / WordPress"}
          />
          <ProjectItem
            title="La galerie de Catherine"
            backgroundImg={catherineGImg}
            projectUrl="https://guilmault-catherine.fr/"
            description={"Site vitrine d'exposition / WordPress"}
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;

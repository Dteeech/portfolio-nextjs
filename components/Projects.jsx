import Image from "next/image";
import React from "react";
import pokedexImg from "../public/assets/projects/Capture d’écran 2023-06-21 à 22.41.36.png";
import retroGamesImg from "../public/assets/projects/retrogames.png";
import bintageImg from "../public/assets/projects/bintage.png";
import catherineGImg from "../public/assets/projects/guilmault-catherine.png";
import Link from "next/link";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className=" text-xl tracking-widest uppercase text-[#5651e5] ">
          Projects
        </p>
        <h2 className='"py-4'>What I've Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Pokedex"
            backgroundImg={pokedexImg}
            projectUrl="/pokedex"
            description={"Pokedex / React, JS, Typescript"}
          />
          <ProjectItem
            title="Retro_Games"
            backgroundImg={retroGamesImg}
            projectUrl="/retroGames"
            description={"E-market de jeux vidéos rétro / React, JS, Node"}
          />
          <ProjectItem
            title="Bin't'age 2.0"
            backgroundImg={bintageImg}
            projectUrl="/bintage"
            description={"Site de réservation de prestations musicales / WordPress"}
          />
          <ProjectItem
            title="La galerie de Catherine"
            backgroundImg={catherineGImg}
            projectUrl="/catherineG"
            description={"Site vitrine d'exposition / WordPress"}
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;

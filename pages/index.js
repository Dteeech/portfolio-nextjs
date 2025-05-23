import About from "@/components/About";
import Contact from "@/components/Contact";
import Main from "@/components/Main";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Isaac | développeur web</title>
        <meta name="description" content="Portfolio de Isaac Marshall, développeur full stack spécialisé en React, Node, CMS. Découvrez mes projets et contactez-moi pour vos besoins web." />
        <meta name="keywords" content="développeur front-end, React, Node, freelance web, portfolio développeur, CMS, Next.js, Tailwind, WordPress"></meta>
        <meta name="author" content="Isaac Marshall"></meta>

        <link rel="icon" href="/favicon.ico" />
        <script
          type="text/javascript"
          src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"
        ></script>
      </Head>
      <Navbar />
      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

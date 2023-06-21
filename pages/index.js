import About from "@/components/About"
import Contact from "@/components/Contact"
import Main from "@/components/Main"
import Navbar from "@/components/Navbar"
import Projects from "@/components/Projects"
import Skills from "@/components/Skills"
import Head from "next/head"
import Image from "next/image"


export default function Home() {
  return (
    <div>
      <Head>
        <title>Isaac | développeur web</title>
        <meta name="description" content="" />
        <link rel="icon" href="/public/favicon.ico" />
      </Head>
      <Navbar />
      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  )
}

import About from "@/components/About"
import Main from "@/components/Main"
import Navbar from "@/components/Navbar"
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
    </div>
  )
}

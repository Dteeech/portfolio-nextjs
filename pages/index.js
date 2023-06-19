import Navbar from "@/components/Navbar"
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
    </div>
  )
}

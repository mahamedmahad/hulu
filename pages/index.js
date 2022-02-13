import Head from "next/head";

//components
import {Header, Nav} from "../components";

export default function Home() {
  return (
    <div>
        <Head>
            <title>Hulu Clone</title>
            <link rel={"icon"} href={"/hulu.ico"}/>
        </Head>
        {/****Header component*/}
        <Header />
        {/*****nav component*******/}
        <Nav />
        {/*******Results Component!**************/}

    </div>
  )
}

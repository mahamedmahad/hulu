import Head from "next/head";

//utils
import requests from "../utils/requests";

//components
import {Header, Nav, Results} from "../components";

export default function Home({results}) {



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
        <Results  results={results}/>

    </div>
  )
}

//serve side Rendering
//this get executed before the page content is rendered to the client!!
export async function  getServerSideProps(context) {
    const genre = context.query.genre;

    //get   requests from tmdb server
    const request = await fetch(
        `https://api.themoviedb.org/3/${requests[genre]?.url || requests.fetchTrending.url}`
    ).then(res => res.json());

    //return data as a prop to the component
    return {
        props: {
            results: request.results
        }
    }

}

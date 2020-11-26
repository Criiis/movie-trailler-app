import React, { useState, useEffect } from "react";
import mainURL from './module/mainFetchURL';
import Row from "./components/Row";
import Hero from "./components/Hero";
import requests from "./module/request";
import "./styles/App.scss";

function App() {
  const [netflixOriginals, setNetflixOriginals] = useState([]);
  const [trending, setTrending] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [romanceMovies, setRomanceMovies] = useState([]);
  const [moviesTrending, setMoviesTrending] = useState([]);
  const [horrorMovies, setHorrorMovies] = useState([]);
  const [documentaries, setDocumentaries] = useState([]);
  const [comedyMovies, setComedyMovies] = useState([]);
  const [actionMovies, setActionMovies] = useState([]);
  const [status, setStatus] = useState(false);
  const [pageStatus, setPageStatus] = useState(false);

  async function fetchData(url, callBack) {
    try {
      const call = await fetch(`${mainURL}${url}`)
      const data = await call.json()
      const result = data.results
      callBack(result);
    } catch (error) {
      console.log('something went wrong!');
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData(`${requests.fetchNetflixOriginals}`, setNetflixOriginals)
    fetchData(`${requests.fetchActionMovies}`, setActionMovies)
    fetchData(`${requests.fetchComedyMovies}`, setComedyMovies)
    fetchData(`${requests.fetchDocumentaries}`, setDocumentaries)
    fetchData(`${requests.fetchHorrorMovies}`, setHorrorMovies)
    fetchData(`${requests.fetchMoviesTrending}`, setMoviesTrending)
    fetchData(`${requests.fetchRomanceMovies}`, setRomanceMovies)
    fetchData(`${requests.fetchTopRated}`, setTopRated)
    fetchData(`${requests.fetchTrending}`, setTrending)
  }, []);


  useEffect(() => {
    if(netflixOriginals.length && trending.length && topRated.length && romanceMovies.length && moviesTrending.length && horrorMovies.length && documentaries.length && comedyMovies.length && actionMovies.length !== 0) {
      setStatus(true)
    }
    window.onload = () => {
      setPageStatus(true)
    }

    if(status === true && pageStatus === true) {
      const urlParams = new URLSearchParams(window.location.search);
      const getPram = urlParams.get('cat');
      let findID;
      if(getPram !== null) {
        findID = document.getElementById(getPram).offsetTop
        window.scrollTo({ top: findID, behavior: 'smooth'});
        console.log('go!');
      }

    }
}, [netflixOriginals, trending, topRated, romanceMovies, moviesTrending, horrorMovies, documentaries, comedyMovies, actionMovies, status, pageStatus])


return (
    <div className="App">
      <Hero />
      {netflixOriginals && <Row title="NETFLIX ORIGINALS" fetchData={netflixOriginals} cat="netflix_originals" status={status} pageStatus={pageStatus}/>}
      {moviesTrending && <Row title="MOVIES TRENDING" fetchData={moviesTrending} cat="movies_trending" status={status} pageStatus={pageStatus}/>}
      {topRated && <Row title="TOP RATED" fetchData={topRated} cat="top_rated" status={status} pageStatus={pageStatus}/>}
      {actionMovies && <Row title="ACTION MOVIES" fetchData={actionMovies}  cat="action_movies"  status={status} pageStatus={pageStatus}/>}
      {romanceMovies && <Row title="ROMANCE MOVIES" fetchData={romanceMovies} cat="romance_movies" status={status} pageStatus={pageStatus}/>}
      {trending && <Row title="TRENDING NOW" fetchData={trending} cat="trending" status={status} pageStatus={pageStatus}/>}
      {comedyMovies && <Row title="COMEDY MOVIES" fetchData={comedyMovies} cat="comedy_movies" status={status} pageStatus={pageStatus}/>}
      {horrorMovies && <Row title="HORROR MOVIES" fetchData={horrorMovies} cat="horror_movies" status={status} pageStatus={pageStatus}/>}
      {documentaries && <Row title="DOCUMENTARIES" fetchData={documentaries} cat="documentaries" status={status} pageStatus={pageStatus}/>}
    </div>
  );
}

export default App;

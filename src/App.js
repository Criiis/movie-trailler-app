import React from "react";
import useFetchURL from "./hooks/useFetchURL";
// import Header from './components/Header'
import Row from "./components/Row";
import Hero from "./components/Hero";
import requests from "./module/request";
import "./styles/App.scss";

function App() {
  //array key value pair
  const fetchData = [];
  fetchData["trending"] = useFetchURL(requests.fetchTrending);
  fetchData["originals"] = useFetchURL(requests.fetchNetflixOriginals);
  console.log(fetchData['trending']);
  Promise.all([fetchData["trending"],fetchData["originals"]]).then( (data) => {
    console.log(data);
  });

  // useEffect(() => {
  //   window.addEventListener("load", () => {
  //     const urlParams = new URLSearchParams(window.location.search);
  //     const getPram = urlParams.get("id");
  //     console.log(getPram);
  //     let findID;
  //     if (getPram !== null) {
  //       findID = document.getElementById(getPram).offsetTop;
  //     }
  //     if (getPram !== null && findID !== null) {
  //       // findID = document.getElementById(getPram).offsetTop
  //       window.scrollTo({ top: findID, behavior: "smooth" });
  //       console.log("LETS GO!");
  //     }
  //   });
  // }, []);

  return (
    <div className="App">
      {/* <Header/> */}
      <Hero />
      <Row
        title="NETFLIX ORIGINALS"
        fetchURL={requests.fetchNetflixOriginals}
      />
      <Row title="TRENDING NOW" fetchURL={requests.fetchTrending} />
      {/* <Row title="TRENDING NOW" fetchData={fetchData['tendeing']} /> */}
      <Row title="TOP RATED" fetchURL={requests.fetchTopRated} />
      <Row title="ACTION MOVIES" fetchURL={requests.fetchActionMovies} />
      <Row title="COMEDY MOVIES" fetchURL={requests.fetchComedyMovies} />
      <Row title="HORROR MOVIES" fetchURL={requests.fetchHorrorMovies} />
      <Row title="ROMANCE MOVIES" fetchURL={requests.fetchRomanceMovies} />
      <Row title="DOCUMENTARIES" fetchURL={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;

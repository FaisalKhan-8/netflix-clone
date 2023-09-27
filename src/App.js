import React from "react";
import "./App.css";
import Section from "./Section";
import requests from "./requests";
import Banner from "./Banner";
import Nav from "./Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Section
        title="NETFLIX ORIGNAL"
        fetchUrl={requests.fetchNetflixOrignals}
        isLargeRow={true}
      />
      <Section title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Section title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Section title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Section title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Section title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Section title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
    </div>
  );
}

export default App;

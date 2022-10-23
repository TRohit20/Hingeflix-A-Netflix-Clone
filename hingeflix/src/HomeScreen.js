import React from "react";
import "./HomeScreen.css";
import Nav from './Nav';
import Banner from "./Banner";
import requests from "./Requests";
import Row from "./Row";

function HomeScreen() {
  return (
    <div className="homeScreen">
        {/* Nav Bar */}
        <Nav/>

        <Banner />

        {/* Each row takes several different props */}
        {/* Props allow us to customise one component from another  */}
        <Row
          title="HINGEFLIX ORIGINALS"
          fetchUrl = {requests.fetchNetflixOriginals}
          largeRow
        />
        <Row title= "Trending Now" fetchUrl = {requests.fetchTrending} />
        <Row title= "Top Rated" fetchUrl = {requests.fetchTopRated}/>
        <Row title= "Action Movies" fetchUrl = {requests.fetchActionMovies}/>
        <Row title= "Comedy Movies" fetchUrl = {requests.fetchComedyMovies}/>   
        <Row title= "Horror Movies" fetchUrl = {requests.fetchHorrorMovies}/>
        <Row title= "Romance Movies" fetchUrl = {requests.fetchRomanceMovies}/>
        <Row title= "Documentaries" fetchUrl = {requests.fetchDocumentaries}/>
    </div>
  );
}

export default HomeScreen;
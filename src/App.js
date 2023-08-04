import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import MovieCard from './MovieCard';
import gsap from "gsap";
import clapperImage from './srcImages/clapper.png';
import movieReel from './srcImages/movie-reel.png';


function App() {
  const apiKey = '3c492a64ccb984989e690cdddc623a97';
  const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`;
  const urlSearch = `https://api.themoviedb.org/3/search/movie?&api_key=${apiKey}&query=`;
  const headingRef = useRef(null);
  const clapperRef = useRef(null);
  const searchRef = useRef(null);
  const reelsRef1 = useRef(null);
  const reelsRef2 = useRef(null);

 

  const[movies, setMovies] = useState([]);
  const[search, setSearch] = useState("");
  const[clear, setClear] = useState("");

  useEffect(() => {
    const api = async () => {
      const getApi = await fetch(url);
      const data = await getApi.json();
      setMovies(data.results);
  }
    api()
  },[]);

  const movieSearch = (e) => {
    e.preventDefault()
    const searchApi = async () => {
      const apiSearch = await fetch(urlSearch + search)
    const searchData = await apiSearch.json()
    setMovies(searchData.results)
  }
    setSearch();
    // console.log(searchData);
    searchApi();
  };



  //Heading Animation
   useEffect(() => {
      const headingAnim = headingRef.current;
      gsap.from(headingAnim, {x:-1800, duration: 1, delay: 1});
  },[]);

  //Search Box Animations
   useEffect(() => {
      const searchAnim = searchRef.current;
      gsap.from(searchAnim, {y:-500, duration: 1, delay: 1.8});
  },[]);

   //Clapper Animation
  useEffect(() => {
      const clapperAnim = clapperRef.current;
      gsap.fromTo(clapperAnim, {scale: 0 , opacity: 0}, {scale: 1, opacity: 1, duration: 1.5, delay: 3});
      setTimeout(() => {
        gsap.fromTo(clapperAnim, {scale: 1 , opacity: 1}, {scale: 0, opacity: 0, duration: 1.5});
      },4500)
  },[]);

  //Movie Reels Animations
  useEffect(() => {
    const reelsAnim = reelsRef1.current;
    gsap.from(reelsAnim, {opacity: 0, duration: 1, delay: 5.8});
},[]);

  useEffect(() => {
    const reelsAnim = reelsRef2.current;
    gsap.from(reelsAnim, {opacity: 0, duration: 1, delay: 5.8});
},[]);

  return (
    <div className="App">
      <h1 ref={headingRef} className='main-heading'>Wright's Movie Madness</h1>
      <div className="search-nav">
      <form ref={searchRef} onSubmit={movieSearch} value={search}>
        <input onChange={(e) => setSearch(e.target.value)}
          type="text" placeholder='Enter A Movie'/>
          <button>Search</button>
        </form>
      </div>

      <div ref={clapperRef} className="clapper-image">
        <img src={clapperImage} alt="" />
        <h2>Action</h2>
      </div>

      <div ref={reelsRef1} className="movie-reel movie-reel1">
        <img src={movieReel} alt="" />
      </div>

      <div ref={reelsRef2} className="movie-reel movie-reel2">
        <img src={movieReel} alt="" />
      </div>

      <div>
        {movies.length > 0 ?(
          <div className='movies'>
            {movies.map((movie)=> 
            <MovieCard key={movie.id} {...movie}/>)}
          </div>
        ):(
        <h2 className='not-found'>No Movie Entered/Found<br/>Please Try Again And Movies Will Be Loaded In 5 Seconds</h2>
        
         )}
      </div>  
    </div>
  );
}

export default App;

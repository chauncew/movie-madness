import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import MovieCard from './MovieCard';

function App() {
  const api = '3c492a64ccb984989e690cdddc623a97';
  const url = `https://api.themoviedb.org/3/movie/popular?api_key=${api}`

  const[movies, setMovies] = useState([]);
  useEffect(() => {
    // fetch(url)
    //   .then(res => res.json())
    //   .then(data => setMovies(data.results))
    const apiInfo = async () => {
      const getApi = await fetch(url);
      const data = await getApi.json();
      setMovies(data.results);
      console.log(data);
  }
    apiInfo()
  },[]);
  console.log(movies)

  return (
    <div className="App">
      <h1 className='main-heading'>Wright's Movie Madness</h1>
      <div className="search-nav">
        <div>
          <form>
            <input type="text" placeholder='Enter A Movie'/>
            <button>Search Madness</button>
          </form>
       </div>
      </div>
      

      <div className="movies">
        {movies.map((movie) => {
          <MovieCard />
        })}
      </div>
    </div>
  );
}

export default App;

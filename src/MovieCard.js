import React, { useEffect, useRef } from 'react';
import gsap from "gsap";



const MovieCard = ({title, vote_average, poster_path, overview}) => {
  const api_image = 'https://image.tmdb.org/t/p/w500/';

  const loadingRef = useRef(null)

  //Loading Animation
  useEffect (() => {
    const loadingAnim = loadingRef.current;
    gsap.fromTo(loadingAnim, {scale: 0 }, {scale: 1, opacity: 1, duration: 1.5, delay: 4.6, autoAlpha: 0});
  },[])
   

  return (
    <div>
      <div className="loading" ref={loadingRef}>
          <h1>Loading &#128534;&#128534;&#128534;&#129324;</h1>
      </div>
    <div className='card'> 
        <div className='cards'>
          <img src={poster_path ? api_image + poster_path : "https://img.freepik.com/free-vector/empty-cinema-hall-realistic-background_1284-11758.jpg?size=626&ext=jpg&uid=R21887356&ga=GA1.1.1729684245.1687615386&semt=ais" } alt="" />
          <div className="info">
            <p className="title">{title}</p>
            <p className="vote">Rating {vote_average}</p>
        </div>
      </div>
        <div className="overview">
          <h2 className="title-overview">Overview</h2>
          <h3 className='overview-info'>{overview}</h3>
        </div>
    </div>
  </div>
  );
};

export default MovieCard;
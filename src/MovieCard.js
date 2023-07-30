import React, { useEffect, useRef } from 'react';
import gsap from "gsap";


const MovieCard = ({title, vote_average, poster_path, overview}) => {
  const api_image = 'https://image.tmdb.org/t/p/w500/';
  const cardRef = useRef(null);

  //Card Animation
  useEffect(() => {
      const animation = cardRef.current;
      gsap.fromTo(animation, {scale: 0 , opacity: 0}, {scale: 1, opacity: 1, ease: 'bounce.out',
      duration: 1.5, delay: 6});
  },[]);

  return (
    <div className='card' ref={cardRef}> 
        <div className='card-img'>
            <img src={poster_path ? api_image + poster_path : "https://img.freepik.com/free-vector/empty-cinema-hall-realistic-background_1284-11758.jpg?size=626&ext=jpg&uid=R21887356&ga=GA1.1.1729684245.1687615386&semt=ais" } alt="" />
          <div className="overview">
            <h2 className="title-overview">Overview</h2>
            <h3 className='overview-info'>{overview}</h3>
          </div>
        </div>

      <div className="info">
        <p className="title">{title}</p>
        <p className="vote">Rating {vote_average}</p>
      </div>
    </div>
  );
};

export default MovieCard;
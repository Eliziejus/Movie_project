import React from "react";
//import App from './app ';

const DEFAULT_PLACEHOLDER_IMAGE =
  "https://piotrkowalski.pw/assets/camaleon_cms/image-not-found-4a963b95bf081c3ea02923dceaeb3f8085e1a654fc54840aac61a57a60903fef.png";


const Movie = (data) => {

  

  // const poster =
  //   movie.Poster === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster;
  //console.log(movie);

  return (
    <div className="movie">
      <div className="table">
        <img src={data.Poster} alt="" />
      <h2>{data.Title}</h2>
      <p>{data.Type}</p>
      
      <p>{data.Year}</p>
      </div>
      
    </div>
  );
};


export default Movie;
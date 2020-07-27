import React, { useState, useEffect } from "react";
import "../css/banner.css";

function Banner() {
  const [fetchMovie, setMovie] = useState();

  useEffect(() => {
    const xhr = new XMLHttpRequest();
    xhr.responseType = "json";
    xhr.open(
      "GET",
      "https://api.themoviedb.org/3/discover/movie?api_key=cd824fd224256a67f14eef590b8998f5&with_genres=28"
    );
    xhr.onload = () => {
      setMovie(
        xhr.response.results[
          Math.floor(Math.random() * (xhr.response.results.length - 1))
        ]
      );
    };
    xhr.send();
  }, []);

  let overview;
  if (fetchMovie) {
    overview = fetchMovie.overview.slice(0, 250) + "...";
  }

  return (
    <>
      {fetchMovie && (
        <div className="banner">
          <img
            className="banner-img"
            src={`https://image.tmdb.org/t/p/original/${fetchMovie.backdrop_path}`}
            alt={fetchMovie.title}
          />
          <div className="banner-contain">
            <h1 className="banner-title">{fetchMovie.title}</h1>
            <p className="banner-overview">{overview}</p>
          </div>
        </div>
      )}
    </>
  );
}

export default Banner;

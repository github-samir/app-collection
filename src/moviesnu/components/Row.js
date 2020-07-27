import React, { useState, useEffect } from "react";
import "../css/Row.css";
import movieTrailer from "movie-trailer";

function Row(props) {
  const [movies, setMovies] = useState(null);
  const [showDetail, setDetail] = useState({ open: false, data: null });
  const [playTrailer, setTrailer] = useState(false);

  useEffect(() => {
    const xhr = new XMLHttpRequest();
    const method = "Get";
    const url = `https://api.themoviedb.org/3/${props.fetchUrl}`;
    xhr.responseType = "json";
    xhr.open(method, url);
    xhr.onload = function () {
      setMovies(xhr.response.results);
    };
    xhr.send();
  }, [props.fetchUrl]);

  let detail;
  let detailMask;
  const handleTrailer = (m) => {
    if (playTrailer) {
      setTrailer(false);
    } else {
      movieTrailer(m.title).then((url) => {
        const urlParams = new URLSearchParams(new URL(url).search);
        setDetail({ open: false, data: null });
        setTrailer(urlParams.get("v"));
      });
    }
  };

  if (showDetail.open) {
    detailMask = (
      <div
        className="detail_mask"
        onClick={() => setDetail({ open: false, data: null })}
      ></div>
    );

    detail = (
      <div className="detail">
        <h3>{showDetail.data.title}</h3>
        <p className="detail_description">{showDetail.data.overview}</p>
        <p>Rating: {showDetail.data.vote_average}</p>
        <button
          className="play__trailer__btn"
          onClick={() => handleTrailer(showDetail.data)}
        >
          Play Trailer
        </button>
      </div>
    );
  }

  return (
    <>
      {movies && (
        <div className="row">
          <h2 className="row_type">{props.type}</h2>
          <div className="row__posters">
            {movies?.map((movie) => (
              <img
                key={movie.id}
                className="row__poster"
                onClick={() => {
                  setDetail({ open: true, data: movie });
                  setTrailer(false);
                }}
                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                alt={movie.title}
              />
            ))}
          </div>
          {playTrailer && (
            <div className="iframe-container">
              <div className="btn-div">
                <button className="cancel" onClick={() => setTrailer(false)}>
                  X
                </button>
              </div>
              <iframe
                title={playTrailer}
                width="100%"
                height="400px"
                src={`https://www.youtube.com/embed/${playTrailer}?autoplay=1`}
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen="true"
              />
            </div>
          )}
          {showDetail.open && (
            <div className="detail_container">
              {detailMask}
              {detail}
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default Row;

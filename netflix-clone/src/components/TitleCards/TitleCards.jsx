import React, { useState, useEffect, useRef } from "react";
import "./TitleCards.css";

const TitleCards = ({ title, category }) => {
  const [apiData, setApiData] = useState([]);

  const cardsRef = useRef();

  const handleWheel = (event) => {
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY * 0.8;
  };

  useEffect(() => {
    const el = cardsRef.current;
    if (!el) return;

    el.addEventListener("wheel", handleWheel);

    return () => {
      el.removeEventListener("wheel", handleWheel);
    };
  }, []);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYzAxZTY5YmI0MDFjYjVhOTM0NGYxZjAxZGUwOGExNSIsIm5iZiI6MTc3MDQyMjU2MC4xOTcsInN1YiI6IjY5ODY4MTIwYTdjNGY5NDdhNTk5ZGI2MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ykjSVWpBYZfco3UQvnkVgiInpbxxaJonnvvoWGkfd8M",
    },
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${category ? category : "now_playing"}?language=en-US&page=1`,
      options,
    )
      .then((res) => res.json())
      .then((res) => setApiData(res.results))
      .catch((err) => console.error(err));
  }, []);

  

  

  const scrollRight = () => {
    setIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const scrollLeft = () => {
    setIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  return (
    <div className="title__cards slider-hover-trigger-layer">
      <h2>{title ? title : "Popular on Netflix"}</h2>

      <div className="card__viewport">
        <div className="card__list" ref={cardsRef}>
          {apiData?.map((card, i) => (
            <div className="card" key={card.id}>
              <img
                src={`https://image.tmdb.org/t/p/w500` + card.backdrop_path}
                alt={card.original_title}
              />
              <p>{card.original_title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TitleCards;

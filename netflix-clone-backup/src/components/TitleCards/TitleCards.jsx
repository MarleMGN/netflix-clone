import React, { useState } from "react";
import "./TitleCards.css";

const TitleCards = ({ cards__data, title, category }) => {
  const [index, setIndex] = useState(0);

  const VISIBLE_CARDS = 6;
  const CARD_WIDTH = 250;

  const maxIndex = Math.ceil(cards__data.length / VISIBLE_CARDS) - 1;

  const scrollRight = () => {
    setIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const scrollLeft = () => {
    setIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  return (
    <div className="title__cards slider-hover-trigger-layer">
      <button
        className="handle handlePrev"
        onClick={scrollLeft}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
          <path d="M15 5l-7 7 7 7V5z" />
        </svg>
      </button>

      <h2>{title?title:"Popular on Netflix"}</h2>

      <div className="card__viewport">
        <div
          className="card__track"
          style={{
            transform: `translateX(-${index * VISIBLE_CARDS * CARD_WIDTH}px)`,
          }}
        >
          {cards__data.map((card, i) => (
            <div className="card" key={i}>
              <img src={card.image} alt={card.name} />
              <p>{card.name}</p>
            </div>
          ))}
        </div>
      </div>

      <button
        className="handle handleNext"
        onClick={scrollRight}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
          <path d="M9 5l7 7-7 7V5z" />
        </svg>
      </button>
    </div>
  );
};

export default TitleCards;

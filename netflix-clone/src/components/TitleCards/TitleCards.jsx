import React, { useRef, useEffect } from "react";
import "./TitleCards.css";
import cards__data from "../../assets/cards/Cards_data.js";

// const cardsRef = useRef();

// const handleWheel = (event) => {
//   event.preventDefault;
//   cardsRef.current.scrollLeft += event.deltaY
// }

// useEffect(() => {
//   cardsRef.current.addEventListener('wheel', handleWheel);
// }, [])

const TitleCards = () => {

  const cardsRef = useRef();

  // mouse wheel scroll
  const handleWheel = (event) => {
    event.preventDefault(); 
    cardsRef.current.scrollLeft += event.deltaY * 0.8; // adjust speed
  };

  useEffect(() => {
    const el = cardsRef.current;
    if (!el) return;

    el.addEventListener("wheel", handleWheel);

    return () => {
      el.removeEventListener("wheel", handleWheel);
    };
  }, []);

  // arrow scroll
  const scrollLeft = () => {
  const container = cardsRef.current;
  const card = container.querySelector(".card");
  if (!card) return;

  const cardWidth = card.offsetWidth + 10;
  const scrollAmount = cardWidth * 5;

  if (container.scrollLeft - scrollAmount <= 0) {
    
    container.scrollTo({
      left: container.scrollWidth,
      behavior: "smooth",
    });
  } else {
    container.scrollBy({
      left: -scrollAmount,
      behavior: "smooth",
    });
  }
};

  const scrollRight = () => {
  const container = cardsRef.current;
  const card = container.querySelector(".card");
  if (!card) return;

  const cardWidth = card.offsetWidth + 10;
  const scrollAmount = cardWidth * 5;

  if (container.scrollLeft + container.clientWidth + scrollAmount >= container.scrollWidth) {
    
    container.scrollTo({
      left: 0,
      behavior: "smooth",
    });
  } else {
    container.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });
  }
};

  return (
    <div className="title__cards">
      <button onClick={scrollLeft}>◀</button>
      <h2>Popular on Netflix</h2>
      <div className="card__list" ref={cardsRef}>
        {cards__data.map((card, index) => {
          return (
            <div className="card" key={index}>
              <img src={card.image} alt="" />
              <p>{card.name}</p>
            </div>
          );
        })}
      </div>
      <button onClick={scrollRight}>▶</button>
    </div>
  );
};

export default TitleCards;

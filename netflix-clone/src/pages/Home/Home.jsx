import React from "react";
import "./Home.css";
import Nav from "../../components/Nav/Nav.jsx";
import hero__banner from "../../assets/hero_banner.jpg";
import hero__title from "../../assets/hero_title.png";
import play__icon from "../../assets/play_icon.png";
import info__icon from "../../assets/info_icon.png";
import TitleCards from "../../components/TitleCards/TitleCards.jsx"
import cards__data from "../../assets/cards/Cards_data.js";

const Home = () => {
  return (
    <div className="home">
      <Nav />
      <section className="landing">
        <img src={hero__banner} alt="" className="banner__img" />
        <div className="landing__caption">
          <img src={hero__title} alt="" className="caption__img" />
          <p>
            Discovering his ties to a secret ancient order, a young man living
            in modern Istanbul embarks on a quest to save the city from an
            immortal enemy.
          </p>
          <div className="landing__btns">
            <button className="btn">Play
                <img src={play__icon} alt="" />
            </button>
            <button className="btn dark__btn">More Info
                <img src={info__icon} alt="" />
            </button>
          </div>
          <TitleCards cards__data={cards__data}/>
        </div>
      </section>
      <div className="more__cards">
        {/* <TitleCards cards__data={cards__data}/>
        <TitleCards cards__data={cards__data}/>
        <TitleCards cards__data={cards__data}/>
        <TitleCards cards__data={cards__data}/> */}
      </div>
    </div>
  );
};

export default Home;

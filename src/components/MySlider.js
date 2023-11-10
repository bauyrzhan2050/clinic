import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../css/mainBlock.css";
// import doctor from "../img/doctor.png";

function MySlider() {
  const settings = {
    arrows: false,
    dots: true,
    fade: true,
    autoplay: false,
    // autoplaySpeed: 2500,
    pauseOnHover: false,
  };
  return (
    <div className="mySlider">
      <Slider {...settings} className="hello">
        <div className="slide1 slide">
          <nav>
            <div className="slider-container">
              <article>
                <h2>Ваш верный партнер по здоровью</h2>
                <h1>Находим причины, а не просто лечим симптомы</h1>

                <a href="#form" className="btn">
                  <span>Записаться </span>
                </a>
              </article>
            </div>
          </nav>
        </div>
        <div className="slide2 slide">
          <nav>
            <div className="slider-container">
              <article>
                <h2>Ваш верный партнер по здоровью</h2>
                <h1>Ваше здоровье — наш главный приоритет</h1>

                <a href="#form" className="btn">
                  <span>Записаться </span>
                </a>
              </article>
            </div>
          </nav>
        </div>
        <div className="slide3 slide">
          <nav>
            <div className="slider-container">
              <article>
                <h2>Ваш верный партнер по здоровью</h2>
                <h1>
                  Акция полный осмотр всего за 1000 тенге успей записаться
                </h1>

                <a href="#form" className="btn">
                  <span>Записаться </span>
                </a>
              </article>
            </div>
          </nav>
        </div>
      </Slider>
    </div>
  );
}
export default MySlider;

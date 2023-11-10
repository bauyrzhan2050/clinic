import React from "react";
import "../css/aboutBlock.css";
import block2img from "../img/block2img.png";
import imgIcon from "../img/icon-2.png";
import imgIcon1 from "../img/icon-1.png";
import { Link } from "react-router-dom";
// import Article from "./Article";
// import MainBlock from "./MainBlock";

const AboutBlock = () => (
  <section id="about" className="aboutBlock">
    <div className="container">
      <img src={block2img} alt="block2img" />
      <article>
        <h3> Мы Заботимся о Вашем Здоровье более 5 лет </h3>
        <p>
          История Urolife Clinic началась в 2014 году с открытия профельного
          медицинского центра на правом берегу столицы.
        </p>
        <nav>
          <img src={imgIcon} alt="imgIcon" />
          <div>
            <h2>Optimize Health Care Services</h2>{" "}
            <p>
              Seamlessly deliver team driven metrics via B2B Globally enable
              competitive solutions via effective synergy.
            </p>
          </div>
        </nav>
        <nav>
          <img src={imgIcon1} alt="imgIcon" />
          <div>
            <h2>Optimize Health Care Services</h2>{" "}
            <p>
              Seamlessly deliver team driven metrics via B2B Globally enable
              competitive solutions via effective synergy.
            </p>
          </div>
        </nav>

        <Link to="/article" className="btn">
          Узнать больше
        </Link>
      </article>
    </div>
  </section>
);

export default AboutBlock;

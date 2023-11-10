import React from "react";
import "../css/ourStuff.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function OurStuff() {
  const settings = {
    arrows: false,
    dots: true,
    fade: true,
    autoplay: false,
    // autoplaySpeed: 500,
    pauseOnHover: false,
  };
  return (
    <section id="doctors" className="ourStuffBlock">
      <h2 className="subTitle">Medical & General Care!</h2>
      <h3 className="mainTitle">Наши Врачи</h3>
      <p className="mainText">
        Proactively revolutionize granular customer service after pandemic
        internal or <br /> "organic" sources istinctively impact proactive human
      </p>
      <Slider {...settings} className="stuffSlider">
        <nav>
          <div className="slidePhoto slidePhoto1"></div>
          <a href="#" className="stuffInfo">
            Name and Lastname
          </a>
          <article>
            <p className="spetialisation">about the spetialist information</p>
            <p className="mainText">Specialisation</p>
          </article>
        </nav>
        <nav>
          <div className="slidePhoto slidePhoto2"></div>
          <a href="#" className="stuffInfo">
            Name and Lastname
          </a>
          <article>
            <p className="spetialisation">about the spetialist information</p>
            <p className="mainText">Specialisation</p>
          </article>
        </nav>
        <nav>
          <div className="slidePhoto slidePhoto3"></div>
          <a href="#" className="stuffInfo">
            Name and Lastname
          </a>
          <article>
            <p className="spetialisation">about the spetialist information</p>
            <p className="mainText">Specialisation</p>
          </article>
        </nav>
      </Slider>
    </section>
  );
}
export default OurStuff;

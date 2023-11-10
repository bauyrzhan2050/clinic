import React from "react";
import "../css/fileServicesBlock.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { MakeReservation } from "./MakeReservation";
import Stethoscope from "../img/stethoscope.png";
import Nurse from "../img/nurse.png";
import Call from "../img/call.png";
import jsonNews from "./news.json";

// function compForPicture(title) {
//   switch (title) {
//     case "Professional Staff":
//       return Stethoscope;
//     case "Emergency Treatment":
//       return Nurse;
//     case "Trusted Doctors":
//       return Call;
//     default:
//       return "";
//   }
// }
function FileServicesBlock() {
  const settings = {
    arrows: false,
    dots: true,
    fade: true,
    autoplay: false,
    // autoplaySpeed: 500,
    pauseOnHover: false,
  };

  const objectBlock = jsonNews;
  return (
    <section id="services" className="servicesBlock">
      <i class="fa-solid fa-syringe icon_absolute_one"></i>
      <i class="fa-solid fa-heart-pulse icon_absolute_two"></i>
      <h2 className="subTitle">Новости медицинского центра</h2>
      <h3 className="mainTitle">новости и события нашей клиники</h3>
      <p className="mainText">Рубрики Блога</p>

      <Slider {...settings} className="servicesSlider">
        <nav>
          {objectBlock.map((card, index) => (
            <div>
              <div className="img"></div>
              <h2>{card.title}</h2>
              <p className="mainText">{card.desc}</p>
              <a href={card.btnLink}>Подробнее</a>
            </div>
          ))}

          {/* <MakeReservation /> */}
        </nav>
        <nav>
          <div className="slidePhoto slidePhoto2"></div>
          <a href="#" className="servicesInfo">
            Гинекология
          </a>
          <article>
            <p className="mainText">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
              eaque tempore cum unde tenetur, reiciendis minima facilis
              doloremque laborum magnam sapiente exercitationem, repellat non
              reprehenderit inventore voluptate. Ipsum numquam, maxime in animi
              commodi earum ab incidunt fuga harum dicta quam impedit! Eius
              ratione sint, facere sunt inventore consectetur natus
              necessitatibus corporis iusto! Ratione voluptatibus officiis odio
              harum vel molestias explicabo consequatur eligendi quae assumenda
              doloremque omnis ab aspernatur adipisci, quas reiciendis
              reprehenderit molestiae debitis.
            </p>
          </article>
          <MakeReservation />
        </nav>
        <nav>
          <div className="slidePhoto slidePhoto3"></div>
          <a href="#" className="servicesInfo">
            Гинекология
          </a>
          <article>
            <p className="mainText">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
              eaque tempore cum unde tenetur, reiciendis minima facilis
              doloremque laborum magnam sapiente exercitationem, repellat non
              reprehenderit inventore voluptate. Ipsum numquam, maxime in animi
              commodi earum ab incidunt fuga harum dicta quam impedit! Eius
              ratione sint, facere sunt inventore consectetur natus
              necessitatibus corporis iusto! Ratione voluptatibus officiis odio
              harum vel molestias explicabo consequatur eligendi quae assumenda
              doloremque omnis ab aspernatur adipisci, quas reiciendis
              reprehenderit molestiae debitis.
            </p>
          </article>
          <MakeReservation />
        </nav>
      </Slider>
    </section>
  );
}
export default FileServicesBlock;

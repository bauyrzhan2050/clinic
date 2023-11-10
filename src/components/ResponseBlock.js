import React from "react";
import "../css/responseBlock.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ResponseBlock() {
  const settings = {
    arrows: false,
    dots: true,
    fade: true,
    autoplay: false,
    // autoplaySpeed: 500,
    pauseOnHover: false,
  };
  return (
    <section id="feedback" className="responseBlock">
      <div className="container_response">
        <h3 className="mainTitle">Комментарии наших пациентов</h3>

        <Slider {...settings} className="responseSlider">
          <nav>
            <article>
              <div className="photo"></div>

              <h2 className="subTitle">Роман Пугачев</h2>
              <p className="mainText">
                Я являюсь пациентом Uğur COŞKUN уже 3 года. Наш учитель — врач,
                который очень хорошо разбирается в своей области, следит за
                новинками, связанными с лечением в мире, улыбается своим
                пациентам, дает моральный настрой и всегда доступен. Слава Богу,
                что Вы — мой учитель…
              </p>
            </article>
          </nav>
          <nav>
            <article>
              <div className="photo"></div>
              <h2 className="subTitle"> Пугачев</h2>
              <p className="mainText">
                Я являюсь пациентом Uğur COŞKUN уже 3 года. Наш учитель — врач,
                который очень хорошо разбирается в своей области, следит за
                новинками, связанными с лечением в мире, улыбается своим
                пациентам, дает моральный настрой и всегда доступен. Слава Богу,
                что Вы — мой учитель…Я являюсь пациентом Uğur COŞKUN уже 3 года.
                Наш учитель — врач, который очень хорошо разбирается в своей
                области, следит за новинками, связанными с лечением в мире,
                улыбается своим пациентам, дает моральный настрой и всегда
                доступен. Слава Богу, что Вы — мой учитель… Я являюсь пациентом
                Uğur COŞKUN уже 3 года. Наш учитель — врач, который очень хорошо
                разбирается в своей области, следит за новинками, связанными с
                лечением в мире, улыбается своим пациентам, дает моральный
                настрой и всегда доступен. Слава Богу, что Вы — мой учитель…
              </p>
            </article>
          </nav>
          <nav>
            <article>
              <div className="photo"></div>
              <h2 className="subTitle">Иванов</h2>
              <p className="mainText">
                Я являюсь пациентом Uğur COŞKUN уже 3 года. Наш учитель — врач,
                который очень хорошо разбирается в своей области, следит за
                новинками, связанными с лечением в мире, улыбается своим
                пациентам, дает моральный настрой и всегда доступен. Слава Богу,
                что Вы — мой учитель…
              </p>
            </article>
          </nav>
        </Slider>
      </div>
    </section>
  );
}
export default ResponseBlock;

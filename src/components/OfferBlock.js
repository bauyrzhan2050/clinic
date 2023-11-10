import React from "react";
import "../css/offerBlock.css";
import Stethoscope from "../img/stethoscope.png";
import Nurse from "../img/nurse.png";
import Call from "../img/call.png";
import jsonData from "./data.json";

function compForPicture(title) {
  switch (title) {
    case "Professional Staff":
      return Stethoscope;
    case "Emergency Treatment":
      return Nurse;
    case "Trusted Doctors":
      return Call;
    default:
      return "";
  }
}
function OfferBlock() {
  // const objectBlock = [
  //   {
  //     picture: Stethoscope,
  //     title: "Professional Staff",
  //     desc: ` Reinvent team building leadership with <br /> an expanded array of plagiarize best <br /> practices viral role play`,
  //     btnLink: "https://google.com",
  //     back: "https://static-cse.canva.com/blob/1145215/1.magebyRodionKutsaevviaUnsplash.jpg",
  //   },
  //   {
  //     picture: Nurse,
  //     title: "Emergency Treatment",
  //     desc: " Reinvent team building leadership with <br /> an expanded array of plagiarize best <br /> practices viral role play",
  //     btnLink: "https://yandex.ru",
  //     back: "https://static-cse.canva.com/blob/1145215/1.magebyRodionKutsaevviaUnsplash.jpg",
  //   },
  //   {
  //     picture: Call,
  //     title: "Trusted Doctors",
  //     desc: " Reinvent team building leadership with <br /> an expanded array of plagiarize best <br /> practices viral role play",
  //     btnLink: "https://yahoo.com",
  //     back: "https://lumiere-a.akamaihd.net/v1/images/sa_pixar_virtualbg_toystory_16x9_8461039f.jpeg",
  //   },
  // ];

  const objectBlock = jsonData;

  return (
    <section className="offerBlock">
      <div className="container">
        <h2 className="subTitle">What we offer</h2>
        <article>
          <h3 className="mainTitle">
            We Provide All Type Of Medical <br /> Practice For Your Family!
          </h3>
          <a href="#https://www.google.kz " className="btn">
            Learn More
          </a>
        </article>

        <div className="serviceBlock">
          {objectBlock.map((card, index) => (
            <div>
              <img src={compForPicture(card.title)} alt="фото" />
              <h2>{card.title}</h2>
              <p className="mainText">{card.desc}</p>
              <a href={card.btnLink}>Подробнее</a>
              <div
                style={{
                  background: `url(${card.back}) no-repeat center/cover`,
                }}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default OfferBlock;

import "../css/uslugi.css";
// import Stethoscope from "../img/stethoscope.png";
import Nurse from "../img/nurse.png";
// import Call from "../img/call.png";
import { useState } from "react";
import US from "../img/ultrasound_medical.svg";
import DOC from "../img/doctor.svg";
import Surgery from "../img/i_surgery.svg";
// import { BrowserRouter } from "react-router-dom";

export function Uslugi() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      tabName: "УРОЛОГИЯ И АНДРОЛОГИЯ ",
      tabContent: (
        <div>
          <div className="content">
            <img src={DOC} alt="ф" />
            <h2> Импотенция</h2>

            <a href="#form" className="btn">
              {" "}
              Записаться на прием
            </a>
          </div>
          <div className="content">
            <img src={DOC} alt="ф" />
            <h2> Простатит</h2>

            <a href="#form" className="btn">
              {" "}
              Записаться на прием
            </a>
          </div>
          <div className="content">
            <img src={DOC} alt="ф" />
            <h2> Аденома Простаты</h2>

            <a href="#form" className="btn">
              {" "}
              Записаться на прием
            </a>
          </div>
          <div className="content">
            <img src={DOC} alt="ф" />
            <h2> Половые Инфекции</h2>

            <a href="#form" className="btn">
              {" "}
              Записаться на прием
            </a>
          </div>
          <div className="content">
            <img src={DOC} alt="ф" />
            <h2> Хламидиоз у мужчин</h2>

            <a href="#form" className="btn">
              {" "}
              Записаться на прием
            </a>
          </div>
          <div className="content">
            <img src={DOC} alt="ф" />
            <h2> Трихомониаз у мужчин</h2>

            <a href="#form" className="btn">
              {" "}
              Записаться на прием
            </a>
          </div>
          <div className="content">
            <img src={DOC} alt="ф" />
            <h2> Уреаплазмоз у мужчин</h2>

            <a href="#form" className="btn">
              {" "}
              Записаться на прием
            </a>
          </div>
          <div className="content">
            <img src={DOC} alt="ф" />
            <h2> Быстрое семяизвержение</h2>

            <a href="#form" className="btn">
              {" "}
              Записаться на прием
            </a>
          </div>
          <div className="content">
            <img src={DOC} alt="ф" />
            <h2> Мужское бесплодие</h2>

            <a href="#form" className="btn">
              {" "}
              Записаться на прием
            </a>
          </div>
        </div>
      ),
    },
    {
      tabName: "УЗИ",
      tabContent: (
        <div>
          <div className="content">
            <img src={US} alt="ф" />
            <h2> УЗИ плода</h2>

            <a href="#form" className="btn">
              {" "}
              Записаться на прием
            </a>
          </div>
          <div className="content">
            <img src={US} alt="ф" />
            <h2> УЗИ почек</h2>

            <a href="#form" className="btn">
              {" "}
              Записаться на прием
            </a>
          </div>
          <div className="content">
            <img src={US} alt="ф" />
            <h2> УЗИ брюшной полости</h2>

            <a href="#form" className="btn">
              {" "}
              Записаться на прием
            </a>
          </div>
          <div className="content">
            <img src={US} alt="ф" />
            <h2> УЗИ мочевого пузыря</h2>

            <a href="#form" className="btn">
              {" "}
              Записаться на прием
            </a>
          </div>
          <div className="content">
            <img src={US} alt="ф" />
            <h2> УЗИ предстательной железы</h2>

            <a href="#form" className="btn">
              {" "}
              Записаться на прием
            </a>
          </div>
          <div className="content">
            <img src={US} alt="ф" />
            <h2> УЗИ мошонки</h2>

            <a href="#form" className="btn">
              {" "}
              Записаться на прием
            </a>
          </div>
          <div className="content">
            <img src={US} alt="ф" />
            <h2> УЗИ органов малого таза</h2>

            <a href="#form" className="btn">
              {" "}
              Записаться на прием
            </a>
          </div>
          <div className="content">
            <img src={US} alt="ф" />
            <h2> УЗИ щитовидной железы</h2>

            <a href="#form" className="btn">
              {" "}
              Записаться на прием
            </a>
          </div>
          <div className="content">
            <img src={US} alt="ф" />
            <h2> УЗИ молочных железы</h2>

            <a href="#form" className="btn">
              {" "}
              Записаться на прием
            </a>
          </div>
          <div className="content">
            <img src={US} alt="ф" />
            <h2> УЗИ суставов</h2>

            <a href="#form" className="btn">
              {" "}
              Записаться на прием
            </a>
          </div>
        </div>
      ),
    },
    {
      tabName: "Амбулаторная хирургия",
      tabContent: (
        <div>
          <div className="content">
            <img src={Surgery} alt="ф" />
            <h2> Атерома</h2>

            <a href="#form" className="btn">
              {" "}
              Записаться на прием
            </a>
          </div>
          <div className="content">
            <img src={Surgery} alt="ф" />
            <h2> Удаление Липомы/Жировиков</h2>

            <a href="#form" className="btn">
              {" "}
              Записаться на прием
            </a>
          </div>
          <div className="content">
            <img src={Surgery} alt="ф" />
            <h2> Обрезание крайней плоти</h2>

            <a href="#form" className="btn">
              {" "}
              Записаться на прием
            </a>
          </div>
          <div className="content">
            <img src={Surgery} alt="ф" />
            <h2> Урология</h2>

            <a href="#form" className="btn">
              {" "}
              Записаться на прием
            </a>
          </div>
          <div className="content">
            <img src={Surgery} alt="ф" />
            <h2> Урология</h2>

            <a href="#form" className="btn">
              {" "}
              Записаться на прием
            </a>
          </div>
          <div className="content">
            <img src={Surgery} alt="ф" />
            <h2> Урология</h2>

            <a href="#form" className="btn">
              {" "}
              Записаться на прием
            </a>
          </div>
          <div className="content">
            <img src={Surgery} alt="ф" />
            <h2> Урология</h2>

            <a href="#form" className="btn">
              {" "}
              Записаться на прием
            </a>
          </div>
        </div>
      ),
    },
    {
      tabName: "Гинекология",
      tabContent: (
        <div>
          <div className="content">
            <img src={Nurse} alt="ф" />
            <h2> Миома</h2>
            <p className="mainText">Все виды урологических услгу.....</p>
            <a href="#form" className="btn">
              {" "}
              Записаться на прием
            </a>
          </div>
          <div className="content">
            <img src={Nurse} alt="ф" />
            <h2> Бесплодие у Женщин</h2>
            <p className="mainText">Все виды урологических услгу.....</p>
            <a href="#form" className="btn">
              {" "}
              Записаться на прием
            </a>
          </div>
          <div className="content">
            <img src={Nurse} alt="ф" />
            <h2> Климактерические расстройства</h2>
            <p className="mainText">Все виды урологических услгу.....</p>
            <a href="#form" className="btn">
              {" "}
              Записаться на прием
            </a>
          </div>
          <div className="content">
            <img src={Nurse} alt="ф" />
            <h2> Эрозия шейки матки</h2>
            <p className="mainText">Все виды урологических услгу.....</p>
            <a href="#form" className="btn">
              {" "}
              Записаться на прием
            </a>
          </div>
          <div className="content">
            <img src={Nurse} alt="ф" />
            <h2> Воспалительные заболевания органов малого таза</h2>
            <p className="mainText">Все виды урологических услгу.....</p>
            <a href="#form" className="btn">
              {" "}
              Записаться на прием
            </a>
          </div>
          <div className="content">
            <img src={Nurse} alt="ф" />
            <h2> Контранция</h2>
            <p className="mainText">Все виды урологических услгу.....</p>
            <a href="#form" className="btn">
              {" "}
              Записаться на прием
            </a>
          </div>
          <div className="content">
            <img src={Nurse} alt="ф" />
            <h2> Эндометриоз</h2>
            <p className="mainText">Все виды урологических услгу.....</p>
            <a href="#form" className="btn">
              {" "}
              Записаться на прием
            </a>
          </div>
          <div className="content">
            <img src={Nurse} alt="ф" />
            <h2> Нарушение менструального цикла</h2>
            <p className="mainText">Все виды урологических услгу.....</p>
            <a href="#form" className="btn">
              {" "}
              Записаться на прием
            </a>
          </div>
          <div className="content">
            <img src={Nurse} alt="ф" />
            <h2> Молочница (кандидоз)</h2>
            <p className="mainText">Все виды урологических услгу.....</p>
            <a href="#form" className="btn">
              {" "}
              Записаться на прием
            </a>
          </div>
          <div className="content">
            <img src={Nurse} alt="ф" />
            <h2> Медикаментозный аборт</h2>
            <p className="mainText">Все виды урологических услгу.....</p>
            <a href="#form" className="btn">
              {" "}
              Записаться на прием
            </a>
          </div>
          <div className="content">
            <img src={Nurse} alt="ф" />
            <h2> Женская интимная пластика или омоложение</h2>
            <p className="mainText">Все виды урологических услгу.....</p>
            <a href="#form" className="btn">
              {" "}
              Записаться на прием
            </a>
          </div>
          <div className="content">
            <img src={Nurse} alt="ф" />
            <h2> Сальпингоофорит</h2>
            <p className="mainText">Все виды урологических услгу.....</p>
            <a href="#form" className="btn">
              {" "}
              Записаться на прием
            </a>
          </div>
          <div className="content">
            <img src={Nurse} alt="ф" />
            <h2> Кольпоскопия</h2>
            <p className="mainText">Все виды урологических услгу.....</p>
            <a href="#form" className="btn">
              {" "}
              Записаться на прием
            </a>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="tabBlog">
      <div className="container">
        <h2 className="subTitle">Наши Услуги</h2>
        <article>
          <h3 className="mainTitle">медицинский центр экспертного класса</h3>
        </article>

        <div className="tabs">
          {tabs.map((tab, index) => (
            <div
              onClick={() => setActiveTab(index)}
              key={index}
              className={`tab ${activeTab === index ? "active" : ""}`}
            >
              {tab.tabName}
            </div>
          ))}
        </div>

        <div className="tabsContent">{tabs[activeTab].tabContent}</div>
      </div>
    </div>
  );
}

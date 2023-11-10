import React, { useState } from "react";
import "../css/bookAppointment.css";
import AppointmentImg from "../img/appointmentImg.jpeg";
import FormControll from "../img/controllImg.svg";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale, setDefaultLocale } from "react-datepicker";
import ru from "date-fns/locale/ru";
import InputMask from "react-input-mask";
registerLocale("ru", ru);

function BookAppointment() {
  const [startDate, setStartDate] = useState(new Date());
  const [value, setValue] = useState("");
  const [showSelect, setShowSelect] = useState(false);
  const [selectedDock, setSelectedDock] = useState("Услуги");

  const handlerInputChange = (event) => {
    setValue(event.target.value);
  };
  function toggleSelect() {
    setShowSelect(!showSelect);
  }
  const handlerDockClick = (doctor) => {
    setSelectedDock(doctor);
    setShowSelect(false);
  };
  return (
    <section className="bookAppointment">
      <div className="container">
        <img src={AppointmentImg} alt="AppointmentImg"></img>
        <form id="form">
          <h2>Запись на прием</h2>
          <h3>
            Заполните форму и начните лечение с лучшими специалистами сегодня!
          </h3>

          <div className="listBlock">
            <div className="selectReferral select" onClick={toggleSelect}>
              <span>{selectedDock}</span>
              <img
                src={FormControll}
                style={{
                  transform: showSelect ? "rotate(180deg)" : "rotate(0deg)",
                }}
              />
              <div
                className="listOfspecialists "
                style={{ display: showSelect ? "block" : "none" }}
              >
                <nav onClick={() => handlerDockClick("Уролог")}>Уролог</nav>
                <nav onClick={() => handlerDockClick("УЗИ")}>УЗИ</nav>
                <nav onClick={() => handlerDockClick("Гинеколог")}>
                  Гинеколог
                </nav>
                <nav onClick={() => handlerDockClick("Терапевт")}>Терапевт</nav>
              </div>
            </div>

            <div className="inputElement">
              <input type="text" className="select" placeholder="Ваше Имя" />
              <i class="fa-solid fa-user"></i>
            </div>
            <div className="inputElement">
              <input type="email" className="select" placeholder="Email" />
              <i class="fa-solid fa-envelope"></i>
            </div>
            <div className="inputElement">
              <InputMask
                onChange={handlerInputChange}
                value={value}
                placeholder="+7"
                mask="+7 (999) 999-99-99"
                type="tel"
                className="select"
              />
              <i class="fa-solid fa-phone fa-rotate-270"></i>
            </div>
            <div className="inputElement">
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                locale={ru}
                type="text"
                className="select"
                placeholder="ДД/ММ/ГГ"
              />
              <i class="fa-solid fa-calendar-days"></i>
            </div>
          </div>
          <button className="btn">Записаться на прием</button>
        </form>
      </div>
    </section>
  );
}
export default BookAppointment;

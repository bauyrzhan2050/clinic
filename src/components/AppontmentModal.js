import React from "react";
import { useState } from "react";
import "../css/appointmentModal.css";
import InputMask from "react-input-mask";

function AppointmentModal({ hello, closeModal }) {
  function sendForm(el) {
    el.preventDefault();
  }
  function clouseModal() {
    closeModal();
  }

  const [value, setValue] = useState("");
  const handlerInputChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <section className={`bookModal ${hello ? "active" : ""}`}>
      <form className="form">
        <button onClick={clouseModal}>X</button>

        <input type="text" required />

        <InputMask
          onChange={handlerInputChange}
          value={value}
          placeholder="+7"
          mask="+7 (999) 999-99-99"
        />

        <h3>Сообщение</h3>

        <textarea></textarea>
        <button className="btn" onClick={sendForm}>
          Послать Заявку
        </button>
      </form>
    </section>
  );
}
export default AppointmentModal;

import React, { useState } from "react";
import "../css/mainBlock.css";
import MySlider from "./MySlider";
import AppointmentModal from "./AppontmentModal";
import Header from "./Header";

function MainBlock() {
  const [hello, setHello] = useState(false);
  const callModal = () => {
    setHello(!hello);
  };
  const closeModal = () => {
    setHello(!hello);
  };

  return (
    <section className="main-block">
      <Header callModal={callModal} />
      {hello && <AppointmentModal hello={true} closeModal={closeModal} />}
      <MySlider />
    </section>
  );
}
export default MainBlock;

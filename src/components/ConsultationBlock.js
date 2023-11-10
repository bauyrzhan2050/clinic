import React from "react";
import "../css/consultationBlock.css";
import Clinic from "../img/clinic.jpg";
import { MakeReservation } from "./MakeReservation";
function ConsultationBlock() {
  return (
    <section className="consultationBlock">
      <div className="layer">
        <h3>Консультация специалиста</h3>
        <p>
          Врачи высшей категории, помогут быстро выявить причину болезни и
          назначить эффективное лечение.
        </p>
        <MakeReservation text="Записаться на прием" />
      </div>
    </section>
  );
}
export default ConsultationBlock;

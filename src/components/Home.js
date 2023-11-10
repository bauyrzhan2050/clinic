import React from "react";
import MainBlock from "./MainBlock";
import "../css/main.css";
import AboutBlock from "./AboutBlock";
import FileServicesBlock from "./FileServicesBlock";
import ConsultationBlock from "./ConsultationBlock";
import OurStuff from "./OurStuff";
import OfferBlock from "./OfferBlock";
import BookAppointment from "./BookAppointment";
import FooterBlock from "./FooterBlock";
import ResponseBlock from "./ResponseBlock";
import CallBlock from "./CallBlock";
import AppointmentModal from "./AppontmentModal";
import Map from "./Map";
import { Uslugi } from "./Uslugi";

export default function Home() {
  return (
    <div>
      <AppointmentModal />
      <MainBlock />
      <AboutBlock />
      <Uslugi />
      <FileServicesBlock />
      <ConsultationBlock />
      <OurStuff />
      <OfferBlock />
      <BookAppointment />
      <ResponseBlock />
      <Map />
      <FooterBlock />
      <CallBlock />
    </div>
  );
}

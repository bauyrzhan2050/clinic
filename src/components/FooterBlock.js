import React from "react";
import "../css/footerBlock.css";
import logo from "../img/logo-no-background.png";
import { Menu } from "./MenuFile";
function FooterBlock() {
  return (
    <footer id="footer">
      <div className="container">
        <a href="#https://translate.google.ru/">
          <img src={logo} alt="logo" />
        </a>
        <Menu />
        <address className="clinicAddress">
          <div>
            <i class="fa-solid fa-location-dot"></i>
            <h3>Адрес: г. Астана, ул.Петрова 10</h3>
          </div>
          <div>
            <i class="fa-solid fa-phone fa-rotate-270"></i>
            <a href="tel:+77777777">+7(777)777-77-77</a>
          </div>
          <div>
            <i class="fa-solid fa-envelope"></i>
            <a href="mailto:vlad@htmlbook.ru">vlad@htmlbook.ru</a>
          </div>
        </address>
        <div className="socialMedia">
          <a href="http://instagram.com/username">
            <i class="fa-brands fa-instagram"></i>
          </a>
          <a href="telegram.me/@groupname">
            <i class="fa-brands fa-telegram"></i>
          </a>
          <a href="https://wa.me/74747777737">
            <i class="fa-brands fa-whatsapp"></i>
          </a>
          <a href="tel:+77777777">
            <i class="fa-solid fa-phone fa-rotate-270"></i>
          </a>
        </div>
      </div>
      <a href="https://wa.me/7479651219">
        <h3>TOO "BA Prodaction". Все права защищены</h3>
      </a>
    </footer>
  );
}
export default FooterBlock;

import { Link as ScrollLink } from "react-scroll";
import "../css/menuFile.css";
export function Menu() {
  return (
    <menu>
      <li>
        <ScrollLink to="home" smooth={true} duration={500}>
          Главная
        </ScrollLink>
      </li>
      <li>
        <ScrollLink smooth={true} duration={500} to="about">
          О нас
        </ScrollLink>
      </li>
      <li>
        <ScrollLink smooth={true} duration={400} to="services">
          Услуги
        </ScrollLink>
      </li>
      <li>
        <ScrollLink smooth={true} duration={400} to="doctors">
          Врачи
        </ScrollLink>
      </li>
      <li>
        <ScrollLink smooth={true} duration={400} to="feedback">
          Отзывы
        </ScrollLink>
      </li>
      <li>
        <ScrollLink smooth={true} duration={400} to="footer">
          Контакты
        </ScrollLink>
      </li>
    </menu>
  );
}

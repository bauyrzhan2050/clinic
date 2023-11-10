import logo from "../img/logo-no-background.png";
import { Menu } from "./MenuFile";
// import { Link as ScrollLink } from "react-scroll";

export default function Header({ callModal }) {
  return (
    <header id="home">
      <div className="container">
        <a href="https://google.kz">
          <img src={logo} alt="logo" />
        </a>
        <Menu />

        <button className="btn" onClick={callModal}>
          Записаться
        </button>
      </div>
    </header>
  );
}

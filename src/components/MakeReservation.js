import { Link as ScrollLink } from "react-scroll";

export function MakeReservation({ text = "Записаться" }) {
  return (
    <ScrollLink className="btn" to="form" smooth={true} duration={500}>
      {text}
    </ScrollLink>
  );
}

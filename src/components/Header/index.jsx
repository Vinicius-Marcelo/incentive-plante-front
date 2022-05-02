import * as H from "./styles";
import Logo from "../../assets/incentive-plante-logo.svg";

export default function Header({ children }) {
  return (
    <H.Container>
      <img className="Logo" src={Logo} alt="Incentive e Plante Logo" />
      <div>
        <nav>
          <a href="#about">SOBRE</a>
          <a href="#numbers">NÚMEROS</a>
          <a href="#adopt">ADOTE</a>
          <a href="#communities">COMUNIDADES</a>
        </nav>
      </div>
      <div className="Right-Side">{children}</div>
    </H.Container>
  );
}

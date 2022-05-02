import * as H from "./styles";
import Logo from "../../assets/incentive-plante-logo.svg";

export default function Header({ children }) {
  return (
    <H.Container>
      <img className="Logo" src={Logo} alt="Incentive e Plante Logo" />
      <div>
        <nav>
          <a href="#about">MINHA ÀRVORE</a>
          <a href="#projects">SAIBA QUEM AJUDA</a>
          <a href="#numbers">FIQUE INFORMADO</a>
          <a href="#adopt">BIOMAS</a>
        </nav>
      </div>
      <div className="Right-Side">{children}</div>
    </H.Container>
  );
}

import * as H from "./styles";
import Logo from "../../assets/incentive-plante-logo.svg";

export default function Header({ children }) {
  return (
    <H.Container>
      <img className="Logo" src={Logo} alt="Incentive e Plante Logo" />
      <div className='Middle'>
        <nav>
          <span>SOBRE</span>
          <span>PROJETOS</span>
          <span>NÚMEROS</span>
          <span>ADOTE</span>
          <span>COMUNIDADES</span>
        </nav>
      </div>
      <div className="Right-Side">{children}</div>
    </H.Container>
  );
}

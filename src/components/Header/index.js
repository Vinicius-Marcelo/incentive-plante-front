import * as H from "./styles";
import Logo from "../../assets/logo.png";

export default function Header({ children }) {
  return (
    <H.Container>
      <img className="logo" src={Logo} alt="Incentive e Plante Logo" />
      <div className="right_side">{children}</div>
    </H.Container>
  );
}

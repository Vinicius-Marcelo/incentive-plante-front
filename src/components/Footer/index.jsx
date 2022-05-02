import * as F from "./styles";

import Instagram from '../../assets/instagram.svg';
import Facebook from '../../assets/facebook.svg';
import Twiter from '../../assets/twiter.svg';
import Linkedin from '../../assets/linkedin.svg';

export default function Footer() {
  return (
    <F.Container>
      <div className="menu">
        <div>
          <p>SOBRE</p>
          <p>PARCEIROS</p>
        </div>
        <div>
          <p>ADOTE</p>
          <p>COMUNIDADES</p>
        </div>
      </div>
      <div className="redes">
        <img src={Instagram} alt='instagram' />
        <img src={Facebook} alt='facebook' />
        <img src={Twiter} alt='twiter' />
        <img src={Linkedin} alt='linkedin' />
      </div>
    </F.Container>
  );
}

import * as M from "./styles";

import { useState } from "react";

import Header from "../../components/Header";
import Button from "../../components/Button";
import Login from "../../components/Modal/Login";
import Register from "../../components/Modal/Register";
import Footer from "../../components/Footer";

import PlantDetail from "../../assets/plant-detail.svg";
import TagLogo from "../../assets/tag-logo.svg";
import IfoodLogo from "../../assets/ifood-logo.svg";
import JoaniniLogo from "../../assets/joanini-logo.svg"
import Icon from '../../assets/icon.svg';

import Adopt from "../../components/Adopt";
import Communities from "../../components/Communities";
import Nordeste from '../../components/Numbers/Nordeste';
import North from "../../components/Numbers/North";
import South from "../../components/Numbers/South";
import InputInformation from "../../components/InputInformation";

function Main() {
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  function handleShowLoginModal() {
    setShowLoginModal(true);
  }

  return (
      <M.Container className="container-main">
        {showRegisterModal && ( 
        <Register 
        openRegisterModal={setShowRegisterModal}
        openLoginModal={setShowLoginModal}
        /> 
        )}
        {showLoginModal && ( 
        <Login 
        openRegisterModal={setShowRegisterModal}
        openLoginModal={setShowLoginModal}
        />
        )}
        <Header>
          <Button onClick={handleShowLoginModal}>Login</Button>
        </Header>
        <M.Banner>
          <div>
            <h1>O planeta precisa de você, vamos começar hoje?</h1>
            <h2>Adote uma árvore!</h2>
            <button>QUERO ADOTAR</button>
          </div>
        </M.Banner>
        <M.OurFuture id="about">
          <div className="Title-OurFuture">
            <img src={PlantDetail} alt="Formato delicado de planta"/>
            <h2>Nosso futuro</h2>
          </div>
          <M.OurFutureSection>
            <div className="FirstSection">
              <h4>Incentive</h4>
              <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. (O projeto) 
              </p>
            </div>
          </M.OurFutureSection>
          <M.OurFutureSection >
            <div className="SecondSection">
              <h4>Plante</h4>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Type specimen book. It has survived not only five centuries, remaining essentially unchanged.( O diferencial - plante uma nova ideia, ajude o mundo e a comunidade - o que estamos plantando no mundo! )
              </p>
            </div>
          </M.OurFutureSection>
        </M.OurFuture>
        <M.Partners>
          <div className="Title-Partners">
            <img src={PlantDetail} alt="Formato delicado de planta"/>
            <h3>Parceiros</h3>
          </div>
          <span>Empresas que acreditam e nos ajudam a melhorar o mundo!</span>
          <div className="Logo-Partners"> 
            <img src={TagLogo} alt="Logo da Tag investimentos"/>
            <img src={IfoodLogo} alt="Logo do Ifood"/>
            <img src={JoaniniLogo} alt="Logo da Joanini Transporte e Logística"/>
          </div>
        </M.Partners>
      <M.DifferentialText>
          <div className="title-numbers">
            <img src={Icon} alt='icon' />
            <h3>Números</h3>
          </div>
          <div className="data">
            <South />
            <North />
            <Nordeste />
          </div>
          <span className="help">Ajude a mudar o mundo e adote um árvore!</span>
          <button>QUERO ADOTAR</button>
        </M.DifferentialText>

        <M.Graphic>
          <Adopt />
        </M.Graphic>

        <M.Communitie>
          <Communities />
        </M.Communitie>
        <InputInformation />
        <Footer />
    </M.Container>
  );
}

export default Main;

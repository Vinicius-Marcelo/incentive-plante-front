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
              Surgimos com o propósito de incentivar pessoas a diminuir os impactos da mudança climática no mundo através do reflorestamento e ajudando projetos voltados para as minorias de cada região do Brasil.
              </p>
            </div>
          </M.OurFutureSection>
          <M.OurFutureSection >
            <div className="SecondSection">
              <h4>Plante</h4>
              <p>
              Com esse incentivo, de forma pratica, buscamos a arrecadação de contribuição financeira através da adoção de árvores, após a adoção redirecionamos a verba para o reflorestamento e ONG’s parceiras de cada região do país de acordo com a espécie de árvore adotada.
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
      <M.DifferentialText id="numbers">
          <div className="Title-Partners Title-number">
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

        <M.Graphic id="adopt">
          <Adopt />
        </M.Graphic>

        <M.Communitie id="communities">
          <Communities />
        </M.Communitie>
        <InputInformation />
        <Footer />
    </M.Container>
  );
}

export default Main;

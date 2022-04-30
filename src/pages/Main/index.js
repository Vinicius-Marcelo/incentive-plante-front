import Login from "../../components/Modal/Login";
import Register from "../../components/Modal/Register";
import { useState } from "react";
import Header from "../../components/Header";
import Button from "../../components/Button";
import * as M from "./styles";
import Footer from "../../components/Footer";
import North from "../../components/Numbers/North";
import South from "../../components/Numbers/South";
import Nordeste from '../../components/Numbers/Nordeste';
import Icon from '../../assets/icon.svg';
import Map from '../../assets/map.svg';

function Main() {
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  function handleShowRegisterModal() {
    setShowRegisterModal(true);
  }

  function handleShowLoginModal() {
    setShowLoginModal(true);
  }

  return (
    <>
      {showRegisterModal && (
        <Register
          closeRegister={setShowRegisterModal}
          openLogin={setShowLoginModal}
        />
      )}
      {showLoginModal && (
        <Login
          closeLogin={setShowLoginModal}
          openRegister={setShowRegisterModal}
        />
      )}
      <Header>
        <Button onClick={handleShowLoginModal}>Login</Button>
        <Button onClick={handleShowRegisterModal}>Cadastrar</Button>
      </Header>
      <M.Container className="container-main">
        <M.Banner>
          <h1>Banner</h1>
        </M.Banner>
        <M.ProjectText>
          <h2>Texto sobre o projeto</h2>
          <p>
            O desmatamento é um processo de degradação da vegetação nativa de
            uma região e pode provocar um processo de desertificação. Além
            disso, é considerado como desmatamento a retirada completa da
            vegetação a partir do chamado “corte raso”.
          </p>
        </M.ProjectText>
        <M.BoxCarousel>
          <div>Card</div>
          <div>Card</div>
          <div>Card</div>
        </M.BoxCarousel>
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
          <div className="title-adopt">
            <img src={Icon} alt='icon' />
            <h3>Adote</h3>
          </div>
          <span>
            Conheça as árvores mais apropriadas para o plantio em cada região do Brasil.
          </span>
          <div className="elements-map">
            <img src={Map} alt='mapa' className="map" />
            <label className="area-north">
              <div className="card north"></div>
              <h4>Norte</h4>
            </label>
            <label className="area-north-east">
              <div className="card north-east"></div>
              <h4>Nordeste</h4>
            </label>
            <label className="area-midwest">
              <div className="card midwest"></div>
              <h4>Centro-Oeste</h4>
            </label>
            <label className="area-southeast">
              <div className="card southeast"></div>
              <h4>Suldeste</h4>
            </label>
            <label className="area-south">
              <div className="card south"></div>
              <h4>Sul</h4>
            </label>
          </div>
        </M.Graphic>
      </M.Container>
    </>
  );
}

export default Main;

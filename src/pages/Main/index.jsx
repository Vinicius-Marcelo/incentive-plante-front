import { useState } from "react";
import Icon from '../../assets/icon.svg';
import Adopt from "../../components/Adopt";
import Button from "../../components/Button";
import Communities from "../../components/Communities";
import Header from "../../components/Header";
import Login from "../../components/Modal/Login";
import Register from "../../components/Modal/Register";
import Nordeste from '../../components/Numbers/Nordeste';
import North from "../../components/Numbers/North";
import South from "../../components/Numbers/South";
import InputInformation from "../../components/InputInformation";
import Footer from "../../components/Footer";
import * as M from "./styles";

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
          <Adopt />
        </M.Graphic>

        <M.Communitie>
          <Communities />
        </M.Communitie>
        <InputInformation />
        <Footer />
      </M.Container>
    </>
  );
}

export default Main;

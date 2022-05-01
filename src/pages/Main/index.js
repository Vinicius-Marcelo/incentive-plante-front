//import Login from "../../components/Modal/Login";
//import Register from "../../components/Modal/Register";
//import { useState } from "react";
import Header from "../../components/Header";
import Button from "../../components/Button";
import * as M from "./styles";
import Footer from "../../components/Footer";

import PlantDetail from "../../assets/plant-detail.svg";
import TagLogo from "../../assets/tag-logo.svg";
import IfoodLogo from "../../assets/ifood-logo.svg";
import JoaniniLogo from "../../assets/joanini-logo.svg"

function Main() {
  // const [showRegisterModal, setShowRegisterModal] = useState(false);
  //const [showLoginModal, setShowLoginModal] = useState(false);

  // function handleShowRegisterModal() {
    //setShowRegisterModal(true);
  //}

  //function handleShowLoginModal() {
    //setShowLoginModal(true);
  //}

  return (
      <M.Container className="container-main">
        {/*{showRegisterModal && (
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
        onClick={handleShowLoginModal}
      )}*/}
        <Header>
        <Button >Login</Button>
        {/* <Button onClick={handleShowRegisterModal}>Cadastrar</Button> */}
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
      <Footer>
        <div>redes sociais</div>

        <div>Copy</div>
      </Footer>
    </M.Container>
  );
}

export default Main;

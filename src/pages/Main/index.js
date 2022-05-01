//import Login from "../../components/Modal/Login";
//import Register from "../../components/Modal/Register";
//import { useState } from "react";
import Header from "../../components/Header";
import Button from "../../components/Button";
import * as M from "./styles";
import Footer from "../../components/Footer";

import PlantDetail from "../../assets/plant-detail.svg"

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
    <>
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
      <M.Container className="container-main">
        <M.Banner>
          <div>
            <h1>O planeta precisa de você, vamos começar hoje?</h1>
            <h2>Adote uma árvore!</h2>
            <button>QUERO ADOTAR</button>
          </div>
        </M.Banner>
        <M.OurFuture>
          <h2><img src={PlantDetail} alt="Formato delicado de planta"/>Nosso futuro</h2>
          <M.OurFutureSection className="FirstSection">
            <div>
              <h4>O Incentive</h4>
              <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. (O projeto) 
              </p>
            </div>
          </M.OurFutureSection>
          <M.OurFutureSection className="SecondSection">
            <div>
              <h4>O Plante</h4>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Type specimen book. It has survived not only five centuries, remaining essentially unchanged.( O diferencial - plante uma nova ideia, ajude o mundo e a comunidade - o que estamos plantando no mundo! )
              </p>
            </div>
          </M.OurFutureSection>
        </M.OurFuture>
        <M.Partners>
          <h3></h3>
        </M.Partners>
      <Footer>
        <div>redes sociais</div>

        <div>Copy</div>
      </Footer>
    </>
  );
}

export default Main;

import Login from "../../components/Modal/Login";
import Register from "../../components/Modal/Register";
import { useState } from "react";
import Header from "../../components/Header";
import Button from "../../components/Button";
import * as M from "./styles";
import Footer from "../../components/Footer";

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
          <h2>Texto Diferencial</h2>
          <p>
            O desmatamento é um processo de degradação da vegetação nativa de
            uma região e pode provocar um processo de desertificação. Além
            disso, é considerado como desmatamento a retirada completa da
            vegetação a partir do chamado “corte raso”.
          </p>
        </M.DifferentialText>

        <M.Graphic>Gráfico</M.Graphic>

        <M.Map>o mapa vai aqui</M.Map>

        <M.BoxInfo>
          <p className="info ">
            Desflorestação, desflorestamento, desmate ou desmatamento é o
            processo de desaparecimento completo e permanente de florestas,
            atualmente causado em sua maior parte por atividades humanas.
          </p>
          <p className="info info--second">
            Desflorestação, desflorestamento, desmate ou desmatamento é o
            processo de desaparecimento completo e permanente de florestas,
            atualmente causado em sua maior parte por atividades humanas.
          </p>
          <p className="info ">
            Desflorestação, desflorestamento, desmate ou desmatamento é o
            processo de desaparecimento completo e permanente de florestas,
            atualmente causado em sua maior parte por atividades humanas.
          </p>
        </M.BoxInfo>
        <section>
          Esse botão faz o que?
          <button>Call To Action</button>
        </section>
        <section>Pra que serve esse form??</section>
      </M.Container>
      <Footer>
        <div>redes sociais</div>

        <div>Copy</div>
      </Footer>
    </>
  );
}

export default Main;

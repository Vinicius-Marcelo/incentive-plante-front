import "./style.css";
import Login from "../../components/Modal/Login";
import Register from "../../components/Modal/Register";
import { useState } from "react";
import Header from "../../components/Header";
import Button from "../../components/Button";

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
      <Header>
        <Button onClick={handleShowLoginModal}>Login</Button>
        <Button onClick={handleShowRegisterModal}>Cadastrar</Button>
      </Header>
      <main className="container-main"></main>
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
    </>
  );
}

export default Main;

import "./style.css";
import Login from "../../components/Modal/Login";
import Register from "../../components/Modal/Register";
import { useState } from "react";

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
    <main className="container-main">
      <header>
        Cabeçalho improvisado
        <button onClick={handleShowLoginModal}>Login</button>
        <button onClick={handleShowRegisterModal}>Cadastrar</button>
      </header>
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
    </main>
  );
}

export default Main;

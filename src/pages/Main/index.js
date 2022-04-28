import "./style.css";
import Login from "../../components/Modal/Login";
import Register from "../../components/Modal/Register";
import { useState } from "react";

function Main() {
  const [showRegisterModal, setShowRegisterModal] = useState(false);

  function handleCloseRegisterModal() {
    setShowRegisterModal(true);
  }

  return (
    <main className="container-main">
      <header>
        Cabeçalho improvisado
        <button>Login</button>
        <button onClick={handleCloseRegisterModal}>Cadastrar</button>
      </header>
      {showRegisterModal && <Register closeRegister={setShowRegisterModal} />}
    </main>
  );
}

export default Main;

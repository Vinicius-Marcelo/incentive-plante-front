import * as L from "./style";
import { ImCross } from "react-icons/im";

import { useState } from "react";
import useStateByMe from "../../../hooks/useStateByMe"

import Logo from "../../../assets/logo.png";

export default function Login() {
  const { setShowLoginModal, setShowRegisterModal } = useStateByMe();
  const [form, setForm] = useState({ email: ``, password: `` });

  function handleSubmit(e) {
    e.preventDefault();
    try {
      if (!form.email || !form.password) return;
    } catch (error) {}
  }

  function handleChangerForm(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleChangeToRegister() {
    setShowLoginModal(false);
    setShowRegisterModal(true);
  }

  return (
    <L.Container>
      <ImCross onClick={() => setShowLoginModal(false)} />
      <L.Form onSubmit={handleSubmit}>
        {/* <h1>Logo</h1> */}
        <img className="logo" src={Logo} alt="logo" />

        <input
          value={form.email}
          name="email"
          type="text"
          placeholder="E-mail"
          onChange={handleChangerForm}
        />
        <input
          value={form.password}
          name="password"
          type="password"
          placeholder="Senha"
          onChange={handleChangerForm}
        />
        <button type="submit">Entrar</button>
        <p>
          É novo? <span onClick={handleChangeToRegister}>Cadastre-se</span>
        </p>
      </L.Form>
    </L.Container>
  );
}

import * as L from "./style";
import { ImCross } from "react-icons/im";
import GmailLogo from "../../../assets/gmail-logo.svg"

import { useState } from "react";
import useStateByMe from "../../../hooks/useStateByMe"

export default function Login() {
  const { setShowLoginModal, setShowRegisterModal } = useStateByMe();
  const [form, setForm] = useState({ name: ``, email: ``, cep: ``, password: `` });

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
        <div>
          <label>Login</label>
          <input
          value={form.email}
          name="email"
          type="text"
          placeholder="Nome Completo"
          onChange={handleChangerForm}
          />
        </div>
        <div>
          <label>Senha</label>
          <input
          value={form.password}
          name="password"
          type="password"
          placeholder="Insira sua senha"
          onChange={handleChangerForm}
        />
        </div>
        <button className="Button-Entry" type="submit">ENTRAR</button>
        <div>
          <span className="Gmail">Login via e-mail</span>
          <button className="Button-Gmail" type="submit"><img src={GmailLogo} alt="Logo do gmail" />GMAIL</button>
        </div>
        <span className="Without-Signup">Ainda não tem cadastro?</span>
        <span className="Underline" onClick={handleChangeToRegister}>QUERO ME CADASTRAR</span>
      </L.Form>
    </L.Container>
  );
}

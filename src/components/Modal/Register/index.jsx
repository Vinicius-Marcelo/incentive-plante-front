import * as R from "./style";
import { ImCross } from "react-icons/im";

import { useState } from "react";
import useStateByMe from "../../../hooks/useStateByMe"

import Logo from "../../../assets/logo.png";

export default function Register() {
  const { setShowLoginModal, setShowRegisterModal } = useStateByMe();
  const [form, setForm] = useState({
    name: ``,
    email: ``,
    cep: ``,
    age: ``,
    password: ``,
  });

  function handleSubmit(e) {
    e.preventDefault();
    try {
      if (!form.name || !form.email || !form.password || !form.cep) return;
    } catch (error) {}
  }

  function handleChangerForm(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleChangeToRegister() {
    setShowRegisterModal(false);
    setShowLoginModal(true);
  }

  return (
    <R.Container>
      <ImCross onClick={() => setShowRegisterModal(false)} />
      <R.Form onSubmit={handleSubmit}>
        <h1>FAÇA SEU CADASTRO</h1>
        <div>
          <label>Nome</label>
          <input
          value={form.name}
          name="name"
          type="text"
          placeholder="Nome Completo"
          onChange={handleChangerForm}
        />
        </div>
        <div>
          <label>E-mail</label>
          <input
          value={form.email}
          name="email"
          type="text"
          placeholder="E-mail"
          onChange={handleChangerForm}
        />
        </div>
        <div>
          <label>CEP</label>
          <input
          value={form.cep}
          name="cep"
          type="number"
          placeholder="Seu CEP"
          onChange={handleChangerForm}
        />
        </div>
        <div>
          <label>Idade</label>
          <input
          value={form.idade}
          name="age"
          type="number"
          placeholder="Sua idade"
          onChange={handleChangerForm}
          />
        </div>
        <div>
          <label>Senha</label>
          <input
          value={form.password}
          name="password"
          type="password"
          placeholder="Senha"
          onChange={handleChangerForm}
         />
        </div>
        <button type="submit">Cadastrar</button>
        <p>
          Possui conta? Faça <span onClick={handleChangeToRegister}>Login</span>
        </p>
      </R.Form>
    </R.Container>
  );
}

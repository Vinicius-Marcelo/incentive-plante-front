import { useState } from "react";
import * as R from "./style";
import { ImCross } from "react-icons/im";

export default function Register({ closeRegister }) {
  const [form, setForm] = useState({
    name: ``,
    email: ``,
    password: ``,
    cep: ``,
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

  return (
    <R.Container>
      <ImCross onClick={() => closeRegister(false)} />
      <R.Form onSubmit={handleSubmit}>
        <h1>Logo</h1>
        <input
          value={form.name}
          name="name"
          type="text"
          placeholder="Nome Completo"
          onChange={handleChangerForm}
        />
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
        <input
          value={form.cep}
          name="cep"
          type="number"
          placeholder="CEP"
          onChange={handleChangerForm}
        />
        <button type="submit">Cadastrar</button>
      </R.Form>
    </R.Container>
  );
}

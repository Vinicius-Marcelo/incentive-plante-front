import * as R from "./style";
import { ImCross } from "react-icons/im";

import { useState, useRef } from "react";

import api from '../../../services/api'

export default function Register({ openRegisterModal, openLoginModal }) {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const cepRef = useRef(null);
  const passwordRef = useRef(null);

  const [form, setForm] = useState({
    name: ``,
    email: ``,
    cep: ``,
    age: ``,
    password: ``,
  });

  function handleChangerForm(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!form.name || !form.email || !form.password || !form.cep) return;
    if (!form.email) {
      nameRef.current.textContent = 'Nome é um campo obrigatório';
      nameRef.current.style.color = 'red';
    } 
    if (!form.email) {
      emailRef.current.textContent = 'Nome é um campo obrigatório';
      emailRef.current.style.color = 'red';
    } 
    if (!form.password) {
      cepRef.current.textContent = 'CEP é um campo obrigatório';
      cepRef.current.style.color = 'red';
    }
    if (!form.password) {
      passwordRef.current.textContent = 'Email é um campo obrigatório';
      passwordRef.current.style.color = 'red';
    }
    console.log(form)
    handleSignUp();
  }

  async function handleSignUp () {
    console.log('entrou no sign up')
    try {
      const response = await api.post('/signup', {
        ...form
      })

      console.log(response)
      openRegisterModal(false);
      openLoginModal(true);

      handleClearForm()
    } catch (error) {
      console.log(error.message);
      console.log(error.response.data.message);
    }
  }

  function handleClearForm () {
    setForm({
      name: ``,
      email: ``,
      cep: ``,
      age: ``,
      password: ``,
    });
  }

  function handleChangeToRegister() {
    openRegisterModal(false);
    openLoginModal(true);
  }

  return (
    <R.Container>
      <ImCross onClick={() => openRegisterModal(false)} />
      <R.Form onSubmit={handleSubmit}>
        <h1>FAÇA SEU CADASTRO</h1>
        <div>
          <label>Nome</label>
          <input
          className="EachInput"
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
          className="EachInput"
          value={form.email}
          name="email"
          type="text"
          placeholder="E-mail"
          onChange={handleChangerForm}
        />
        </div>
        <section>
          <div>
          <label>CEP</label>
          <input
          className="Cep-Input"
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
          className="Idade-Input"
          value={form.idade}
          name="age"
          type="number"
          placeholder="Sua idade"
          onChange={handleChangerForm}
          />
        </div>
        </section>
        <div >
          <label>Senha</label>
          <input
          className="EachInput"
          value={form.password}
          name="password"
          type="password"
          placeholder="Senha"
          onChange={handleChangerForm}
         />
        </div>
        <button className="Button-Entry" type="submit">Cadastrar</button>
        <p>
          Possui conta? Faça o<span className="Underline" onClick={handleChangeToRegister}>Login</span>
        </p>
      </R.Form>
    </R.Container>
  );
}

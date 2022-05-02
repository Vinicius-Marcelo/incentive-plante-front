import * as L from "./style";
import { ImCross } from "react-icons/im";
import GmailLogo from "../../../assets/gmail-logo.svg"

import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

import api from "../../../services/api";
import { setItem } from "../../../utils/storage";

export default function Login({ openRegisterModal, openLoginModal }) {
  const navigate = useNavigate();

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const [form, setForm] = useState({ 
    email: ``, 
    password: `` 
  });

  function handleChangerForm(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!form.email) {
      emailRef.current.textContent = 'Email é um campo obrigatório';
      emailRef.current.style.color = 'red';
    } 
    if (!form.password) {
      passwordRef.current.textContent = 'Email é um campo obrigatório';
      passwordRef.current.style.color = 'red';
    }

    handleLogin ()
  }

  async function handleLogin () {
    try {
      const response = await api.post('/login', {
        ...form
      });

      const { token, usuarios } = response.data;
      setItem('token', token);
      setItem('userID', usuarios.id);
      setItem('userName', usuarios.nome);

      navigate('/my-environment');

      handleClearForm()
    } catch (error) {
      console.log(error.message);
      console.log(error.response.data.message);
    }
  }

  function handleClearForm () {
    setForm({
      email: ``,
      password: ``,
    });
  }

  function handleChangeToRegister() {
    openLoginModal(false);
    openRegisterModal(true);
  }

  return (
    <L.Container>
      <ImCross onClick={() => openLoginModal(false)}/>
      <L.Form onSubmit={handleSubmit}>
        <div>
          <label ref={emailRef}>Email</label>
          <input
          value={form.email}
          name="email"
          type="text"
          placeholder="Insira aqui o email"
          onChange={handleChangerForm}
          />
        </div>
        <div>
          <label ref={passwordRef}>Senha</label>
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

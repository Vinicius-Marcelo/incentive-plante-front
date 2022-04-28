import { useState } from 'react';
import './style.css';

export default function Login() {
    const [form, setForm] = useState({ email: ``, password: `` });
    function handleSubmit(e) {
        e.preventDefault();
        try {
            if (!form.email || !form.password) return;
        } catch (error) {

        }
    }
    function handleChangerForm(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }
    return (
        <div className='contaner-login'>
            <form onSubmit={handleSubmit}>
                <div className='inputs-login'>
                    <label>E-mail</label>
                    <input
                        value={form.email}
                        name='email'
                        type='text'
                        placeholder='E-mail'
                        onChange={handleChangerForm} />
                    <label>Senha</label>
                    <input
                        value={form.password}
                        name='password'
                        type='password'
                        placeholder='Senha'
                        onChange={handleChangerForm} />
                </div>
                <button>Entrar</button>
            </form>
        </div>
    );
}
import { useState } from 'react';
import './style.css';

export default function Profile() {
    const [form, setForm] = useState({ name: ``, email: ``, password: ``, cep: `` });
    function handleSubmit(e) {
        e.preventDefault();
        try {
            if (!form.name || !form.email || !form.password || !form.cep) return;
        } catch (error) {

        }
    }
    function handleChangerForm(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }
    return (
        <div className='container-profile'>
            <form onSubmit={handleSubmit}>
                <div className='inputs-profile'>
                    <label>Nome</label>
                    <input
                        value={form.name}
                        name='name'
                        type='text'
                        placeholder='Nome Completo'
                        onChange={handleChangerForm} />
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
                    <label>CEP</label>
                    <input
                        value={form.cep}
                        name='cep'
                        type='number'
                        placeholder='CEP'
                        onChange={handleChangerForm} />
                </div>
                <button>Atualizar</button>
            </form>
        </div>
    );
}
import * as I from './style';
import Icon from '../../assets/icon.svg';

export default function InputInformation() {
    return (
        <I.InputInformation>
            <div className='title'>
                <img src={Icon} alt='icon' />
                <h3>Quer ficar por dentro?</h3>
            </div>
            <span>Cadastre-se e receba informações direto no seu email toda semana</span>
            <div className='inputs'>
                <label>Nome Completo</label>
                <input type='text' placeholder='Insira seu nome' />
            </div>
            <div className='inputs email'>
                <label>E-mail</label>
                <input type='email' placeholder='Insira seu email' />
            </div>
            <button>CADASTRE-SE</button>
        </I.InputInformation>
    );
}
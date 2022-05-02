import * as I from './style';
import Icon from '../../assets/icon.svg';
import BottomArrow from '../../assets/bottom-arrow.svg';

export default function Information() {
    return (
        <I.Container>
            <div className='title'>
                <img src={Icon} alt='icon' />
                <h3>Conheça as nossos biomas</h3>
            </div>
            <div className='information'>
                <div className='card-on'>
                    <p>Monitoramento aponta aumento de 50% em alertas de desmatamento no Sudeste</p>
                    <img src={BottomArrow} alt='arrow' />
                </div>
                <div className='card-two'>
                    <p>Sudeste será região mais afetada por desmate da Amazônia, diz líder do IPCC</p>
                    <img src={BottomArrow} alt='arrow' />
                </div>
                <div className='card-theer'>
                    <p>Região Sudeste: Paisagens intensamente Transformadas</p>
                    <img src={BottomArrow} alt='arrow' />
                </div>
            </div>
        </I.Container>
    );
}
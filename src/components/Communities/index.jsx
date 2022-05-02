import * as C from './style';
import Icon from '../../assets/icon.svg';
import OngOn from '../../assets/ong-on.svg';
import OngTwo from '../../assets/ong-two.svg';
import OngTheer from '../../assets/ong-theer.svg';

export default function Communities() {
    return (
        <C.Communities>
            <div className='Title-Partners title'>
                <img src={Icon} alt='icon' />
                <h3>Comunidades</h3>
            </div>
            <div className='cards'>
                <div className='card-on'>
                    <img src={OngOn} alt='' />
                    <p>Tem como objetivo produzir, aprofundar, sistematizar e divulgar conhecimentos sobre os povos indígenas das Américas.</p>
                </div>
                <div className='card-two'>
                    <img src={OngTwo} alt='' />
                    <p>Otimiza e direciona investimentos públicos e privados para cumprimento de obrigações legais, para compensação de emissão de carbono ou redução da pegada hídrica.</p>
                </div>
                <div className='card-theer'>
                    <img src={OngTheer} alt=''/>
                    <p>Cimi acredita que os povos indígenas são fontes de inspiração para a revisão dos sentidos, da história, das orientações e práticas sociais, políticas e econômicas construídas até hoje.</p>
                </div>
            </div>
            <span className="help">Ajude a mudar o mundo e adote um árvore!</span>
            <button>QUERO ADOTAR</button>
        </C.Communities>
    );
}
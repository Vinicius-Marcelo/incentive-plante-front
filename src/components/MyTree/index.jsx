import * as M from './style';
import Icon from '../../assets/icon.svg';
import TreeUser from '../../assets/tree-user.png';
import IconShare from '../../assets/icon-share.svg';

export default function MyTree() {
    return (
        <M.Container>
            <div className='title'>
                <img src={Icon} alt='icon' />
                <h3>Minha árvore</h3>
            </div>
            <div className='cards'>
                <span className='card-informaction left'>
                    <p>Jerivá</p>
                    <p>Nome cientifico:</p>
                    <p>romanzaffiana</p>
                    <p>Idade de muda: 2anos</p>
                    <p>Bioma: Pampas</p>
                </span>
                <div className='card-two'>
                    <img src={TreeUser} alt='tree' />
                </div>
                <span className='card-informaction right'>
                    <p>Informações:</p>
                    <p>Coqueiro pode chegar</p>
                    <p>a 20 metros de altura</p>
                    <p>e seus frutos possuem</p>
                    <p>valor econômico para</p>
                    <p>produtos alimenticios</p>
                    <p>no geral.</p>
                    <img src={IconShare} alt='icon share' className='share' />
                </span>
            </div>
        </M.Container>
    );
}
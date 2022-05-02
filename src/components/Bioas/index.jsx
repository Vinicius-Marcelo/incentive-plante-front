import * as B from './style';
import Icon from '../../assets/icon.svg';
import Bioa from '../../assets/bioas.png';

export default function Bioas() {
    return (
        <B.Container>
            <div className='title'>
                <img src={Icon} alt='icon' />
                <h3>Conheça os nossos biomas</h3>
            </div>
            <div className='bioa'>
                <img src={Bioa} alt='bioas' />
            </div>
        </B.Container>
    );
}
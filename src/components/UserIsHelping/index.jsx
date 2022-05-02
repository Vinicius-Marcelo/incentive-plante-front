import * as U from './style';
import Kanine from '../../assets/ong-kanine.svg';
import Imnegra from '../../assets/ong-imnegra.svg';
import CTI from '../../assets/ong-cti.svg';
import Icon from '../../assets/icon.svg';

export default function UserIsHelping() {
    return (
        <U.Container>
            <div className='title'>
                <img src={Icon} alt='icon' />
                <h3>Saiba quem você está ajudando</h3>
            </div>
            <div className='cards'>
                <div>
                    <img src={Kanine} alt='kanine' />
                </div>
                <div>
                    <img src={Imnegra} alt='imnegra' />
                </div>
                <div>
                    <img src={CTI} alt='Cti' />
                </div>
            </div>
        </U.Container>
    );
}
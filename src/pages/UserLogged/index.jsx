import Button from '../../components/Button';
import HeaderUser from '../../components/HeaderUser';
import useStateByMe from '../../hooks/useStateByMe';
import MyTree from '../../components/MyTree';
import UserIsHelping from '../../components/UserIsHelping';
import Information from '../../components/Infomation';
import Bioas from '../../components/Bioas';
import * as U from './style';

export default function UserLogged() {
    const { showLoginModal, setShowLoginModal, showRegisterModal } = useStateByMe();

    function handleShowLoginModal() {
        setShowLoginModal(true);
    }

    return (
        <U.Container>
            <HeaderUser>
                <Button onClick={handleShowLoginModal}>Sair</Button>
            </HeaderUser>
            <div className='name-user'>
                <h2>LUANA!</h2>
                <div>
                    <p>"Tendo em conta as condições de que despõe e na medida do possível, é a natureza que faz sempre as coisas mais belas e melhores."</p>
                </div>
                <p>Aristóteles</p>
            </div>
            <MyTree />
            <UserIsHelping />
            <Information />
            <Bioas />
        </U.Container>
    );
}
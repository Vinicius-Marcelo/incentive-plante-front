import BottomArrow from '../../assets/bottom-arrow.svg';
import Icon from '../../assets/icon.svg';
import Map from '../../assets/map.svg';
import * as A from './style';

export default function Adopt() {
    return (
        <A.Map>
            <div className="title-adopt Title-Partners">
                <img src={Icon} alt='icon' />
                <h3>Adote</h3>
            </div>
            <span className='caption'>
                Conheça as árvores mais apropriadas para o plantio em cada região do Brasil.
            </span>
            <div className="elements-map">
                <img src={Map} alt='mapa' className="map" />
                <label className="area-north">
                    <div className="card north"></div>
                    <h4>Norte</h4>
                </label>
                <label className="area-north-east">
                    <div className="card north-east"></div>
                    <h4>Nordeste</h4>
                </label>
                <label className="area-midwest">
                    <div className="card midwest"></div>
                    <h4>Centro-Oeste</h4>
                </label>
                <label className="area-southeast">
                    <div className="card southeast"></div>
                    <h4>Suldeste</h4>
                </label>
                <label className="area-south">
                    <div className="card south"></div>
                    <h4>Sul</h4>
                </label>
            </div>
            <div className='regions'>
                <h4>Escolha uma região:</h4>
                <div>
                    <p>Norte</p>
                    <img src={BottomArrow} alt='seta-baixo' />
                </div>
                <div>
                    <p>Centro-Oeste</p>
                    <img src={BottomArrow} alt='seta-baixo' />
                </div>
                <div>
                    <p>Nordeste</p>
                    <img src={BottomArrow} alt='seta-baixo' />
                </div>
                <div>
                    <p>Suldeste</p>
                    <img src={BottomArrow} alt='seta-baixo' />
                </div>
                <div className='region-south'>
                    <p>Sul</p>
                    <span></span>
                </div>
            </div>
        </A.Map>
    );
}
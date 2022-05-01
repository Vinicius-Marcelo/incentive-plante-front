import Button from "../../components/Button";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import * as D from "./styles";
import LogoDetail from "../../assets/plant-detail.svg";
import Monguba from "../../assets/monguba.svg";
import Sucupira from "../../assets/sucupira.svg";
import Jeriva from "../../assets/jeriva.svg";
import Aqcc from "../../assets/aqcc.svg";
import CentralCerrados from "../../assets/central_cerrados.svg";
import ComitePovos from "../../assets/comite_povos.svg";
import Cti from "../../assets/cti.svg";
import Imnegra from "../../assets/imnegra.svg";
import Kaninde from "../../assets/kaninde.svg";
import BiomeBrazil from "../../assets/biomes_brazil.svg";

import { IoIosArrowDown } from "react-icons/io";

export default function Dashboard() {
  function handleLogout() {}

  return (
    <>
      <Header>
        <Button onClick={handleLogout}>SAIR</Button>
      </Header>
      <D.Container>
        <D.Banner>
          <h1>
            "Se soubesse que o mundo se acaba amanhã, eu ainda hoje plantaria
            uma árvore." Martin Luther King Jr.
          </h1>
        </D.Banner>
        <D.TreeSamples>
          <h1>
            <img src={LogoDetail} alt="Detalhe da Logo" />
            Adote uma árvore
          </h1>
          <D.Trees>
            <li>
              <img src={Monguba} alt="Imagem da Monguba" />
              <div className="info_tree">
                <h2>Monguba</h2>
                <p>Nome científico: Pachira aquática</p>
                <p>Região do plantio: Amazônica</p>
                <p>Tamanho: Árvore que pode chegar a 12 metros de altura</p>

                <Button>Adotar</Button>
              </div>
            </li>
            <li>
              <img src={Sucupira} alt="Imagem da Sucupira" />
              <div className="info_tree">
                <h2>Sucupira</h2>
                <p>Nome científico: Pterodon emarginatus</p>
                <p>Região do plantio: Cerrado</p>
                <p>Tamanho: Árvore que pode chegar a 16 metros de altura</p>

                <Button>Adotar</Button>
              </div>
            </li>
            <li>
              <img src={Jeriva} alt="Imagem da Jerivá" />
              <div className="info_tree">
                <h2>Jerivá</h2>
                <p>Nome científico: Syagrus romanzoffiana</p>
                <p>Região do plantio: Pampas</p>
                <p>Tamanho: Árvore que pode chegar a 20 metros de altura</p>

                <Button>Adotar</Button>
              </div>
            </li>
          </D.Trees>
        </D.TreeSamples>
        <D.Communities>
          <h1>
            <img src={LogoDetail} alt="Detalhe da Logo" />
            Conheça quem você apoia quando adota
          </h1>
          <ul>
            <li>
              <img src={Kaninde} alt="Kanindé" />
            </li>
            <li>
              <img src={ComitePovos} alt="Comitê dos Povos e Comunidades" />
            </li>
            <li>
              <img src={CentralCerrados} alt="Central do Cerrado" />
            </li>
            <li>
              <img src={Aqcc} alt="AQCC" />
            </li>
            <li>
              <img src={Imnegra} alt="IMNEGRA" />
            </li>
            <li>
              <img src={Cti} alt="CTI" />
            </li>
          </ul>
        </D.Communities>
        <D.MoreInfo>
          <h1>
            <img src={LogoDetail} alt="Detalhe da Logo" />
            Fique informado
          </h1>
          <div>
            <p>
              <span>
                Monitoramento aponta aumento de 50% em alertas de desmatamento
                no Sudeste
              </span>
              <IoIosArrowDown />
            </p>
            <p>
              <span>
                Sudeste será região mais afetada por desmate da Amazônia, diz
                líder do IPCC.
              </span>
              <IoIosArrowDown />
            </p>
            <p>
              <span>Região Sudeste: Paisagens intensamente Transformadas</span>
              <IoIosArrowDown />
            </p>
          </div>
        </D.MoreInfo>
        <D.Biomes>
          <h1>
            <img src={LogoDetail} alt="Detalhe da Logo" />
            Conheça os nossos biomas
          </h1>
          <div>
            <img
              className="biome_brazil"
              src={BiomeBrazil}
              alt="Biomas do Brasil"
            />
          </div>
        </D.Biomes>
      </D.Container>
      <Footer />
    </>
  );
}

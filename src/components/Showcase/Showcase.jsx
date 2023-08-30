import "./Showcase.css";
import showcaseImg from '../../assets/showcase.png';
import Button from "../Button/Button";
import Redirect from "../Redirect/Redirect";


export default function Showcase() {
  return (
    <section className="showcase">
      <div className="textgroup">
        <h1 className="title"><span>Eco</span>Mod</h1>
        <p className="subtitle">
          "Criando o futuro com a harmonia da natureza!"
        </p>
        <p className="description">
        A EcoMod cria móveis sustentáveis e inovadores, representando nossa crença na harmonia entre humanos e natureza.
        </p>
        <Redirect href={'#contact'} arrow={true}>Entre em contato</Redirect>
      </div>
      <img className="showcase-img" src={showcaseImg} alt='Imagem ilustrativa de móveis naturais' />
    </section>
  );
}

import "./Showcase.css";
import showcaseImg from '../../assets/showcase.png';
import Button from "../Button/Button";


export default function Showcase() {
  return (
    <section className="showcase">
      <div className="textgroup">
        <h1 className="title"><span>Eco</span>Nod</h1>
        <p className="subtitle">
          "Criando o futuro com a harmonia da natureza!"
        </p>
        <p className="description">
        A EcoNod cria móveis sustentáveis e inovadores, representando nossa crença na harmonia entre humanos e natureza.
        </p>
        <Button arrow={true}>Entre em contato</Button>
      </div>
      <img className="showcase-img" src={showcaseImg} alt='Imagem ilustrativa de móveis naturais' />
    </section>
  );
}

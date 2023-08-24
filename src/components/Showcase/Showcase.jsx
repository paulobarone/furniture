import "./Showcase.css";
import showcaseImg from '../../assets/showcase.png';
import Button from "../Button/Button";


export default function Showcase() {
  return (
    <section className="showcase">
      <div className="textgroup">
        <h1 className="title">Lorem ipsum dolor sit amet.</h1>
        <p className="description">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae consequatur fugit a laudantium ipsa dolores hic sunt minima atque iste, nesciunt ad maiores repudiandae? Perferendis dolores molestias impedit sapiente quae.
        </p>
        <Button arrow={true}>Entre em contato</Button>
      </div>
      <img className="showcase-img" src={showcaseImg} alt='Imagem ilustrativa de móveis naturais' />
    </section>
  );
}

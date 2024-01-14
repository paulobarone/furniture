import "./About.css";
import ForestIcon from '@mui/icons-material/Forest';
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import InventoryIcon from "@mui/icons-material/Inventory";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import iconArrow from '../../assets/down-arrow.svg'
import { useState } from "react";

export default function About() {
  const [accordion, setAccordion] = useState(null);

  const aboutInfos = [
    {
      name: "Sustentabilidade",
      description: "Escolhemos materiais eco-friendly e implementamos processos de produção de baixo impacto, contribuindo assim para um planeta mais saudável e verde.",
      img: <ForestIcon />,
    },
    {
      name: "Economia",
      description: "Qualidade não precisa ser dispendiosa. Oferecemos produtos de excelência a preços acessíveis, garantindo que você obtenha o máximo valor pelo seu investimento.",
      img: <AttachMoneyIcon />,
    },
    {
      name: "Portabilidade",
      description: "Versatilidade em movimento. Projetamos produtos com a portabilidade em mente. Nossa linha é criada para se adaptar ao seu estilo de vida dinâmico, permitindo que você leve nossa inovação consigo, onde quer que vá.",
      img: <InventoryIcon />,
    },
    {
      name: "Criatividade",
      description: "Explore sua imaginação. Acreditamos no poder da criatividade. Nossos produtos são concebidos para inspirar e apoiar suas expressões criativas, dando vida às suas ideias de maneiras surpreendentes.",
      img: <EmojiObjectsIcon />,
    },
  ];

  const handleAccordion = (index) => {
    if(accordion === index) {
      setAccordion(null);
    } else {
      setAccordion(index);
    }
  }

  return (
    <section id="about">
      <div className="textgroup about-textgroup">
        <h2>Sobre nós</h2>
        <p>
        Como grupo, estamos empenhados em promover uma revolução na maneira como você vive e interage com o seu espaço. Ao combinar sustentabilidade, inovação e tecnologia, a nossa linha de móveis moduláveis oferece soluções que se adaptam ao seu estilo de vida dinâmico.
        </p>
      </div>
      <ul className="about-list">
        {aboutInfos.map((item, index) => {
          return (
            <li onClick={() => handleAccordion(index)} className={`about-item ${accordion === index && 'active'}`} key={index}>
              <img className='icon-arrow' src={iconArrow} alt="arrow" />
              <div className="about-resume">
                {item.img}
                <span>{item.name}</span>
              </div>
              <p className="about-item-description">{item.description}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

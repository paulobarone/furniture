import "./About.css";
import ForestIcon from '@mui/icons-material/Forest';
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import InventoryIcon from "@mui/icons-material/Inventory";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";

export default function About() {
  const aboutInfos = [
    {
      name: "Sustentabilidade",
      img: <ForestIcon />,
    },
    {
      name: "Economia",
      img: <AttachMoneyIcon />,
    },
    {
      name: "Portabilidade",
      img: <InventoryIcon />,
    },
    {
      name: "Criatividade",
      img: <EmojiObjectsIcon />,
    },
  ];

  return (
    <section id="about">
      <div className="textgroup about-textgroup">
        <h2>Sobre nós</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
          iusto laboriosam doloremque. Delectus, vitae in. Possimus odit
          voluptate, nisi repellat architecto exercitationem dolore, repudiandae
          accusamus a quos odio doloremque mollitia?
        </p>
      </div>
      <ul className="about-list">
        {aboutInfos.map((item, index) => {
          return (
            <li className="about-item" key={index}>
              {item.img}
              <span>{item.name}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

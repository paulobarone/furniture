import './Projects.css';
import { useState } from "react";
import flexcube from '../../assets/flexcube.png';
import ecotable from '../../assets/ecotable.png';
import compactMod from '../../assets/compact-mod.png'

export default function Projects() {
  const [project, setProject] = useState(0);
  const [projectInfo, setProjectInfo] = useState(0);

  const projects = [
    {
      name: 'Flex Cube',
      resume: 'Crie, Mude, Inove - Cubos para uma Organização Única',
      description: 'Explore a versatilidade da nossa estante modulável de cubos e transforme seu espaço de maneira única. Com a capacidade de montar e reconfigurar conforme suas necessidades, você não só organiza seus pertences de forma inteligente, mas também cria um elemento estético que se adapta ao seu gosto pessoal. Crie uma biblioteca em constante evolução, exiba suas lembranças favoritas ou mantenha seus itens essenciais ao alcance, tudo com a flexibilidade que nossa estante proporciona.',
      img: flexcube
    },
    {
      name: 'Ecotable',
      resume: 'Do minimalismo à funcionalidade máxima em segundos',
      description: 'Com a nossa inovadora Ecotable, você está prestes a experimentar uma revolução no aproveitamento de espaço e design funcional. Esta peça versátil transcende os limites tradicionais do mobiliário, transformando-se de uma mesa de centro elegantemente desenhada em uma estante espaçosa, tudo em um piscar de olhos. Agora você pode maximizar a utilidade de cada centímetro do seu espaço, sem precisar sacrificar o estilo que valoriza.',
      img: ecotable
    },
    {
      name: 'Compact Mod',
      resume: 'Crie, Aprenda e Brinque com Praticidade e Estilo',
      description: 'Com a nossa mesa modulável, você está prestes a descobrir uma abordagem completamente nova para a organização e a diversão em seus espaços. Essa peça versátil é mais do que apenas um móvel - é uma solução inteligente e prática que não apenas mantém seus itens arrumados e acessíveis, mas também incentiva a expressão criativa em todos os momentos. Seja em um espaço de trabalho ou na área de estudos das crianças, essa mesa é o catalisador para um ambiente onde a organização e a criatividade coexistem de maneira harmoniosa.',
      img: compactMod
    }
  ]

  const handleSelected = (index) => {
    setProject(index);
    setProjectInfo(0);
  }

  return (
    <section id="projects">
      <h2>Projetos</h2>
      <div className='projects-container'>
        <ul className='projects-list'>
          {projects.map((item, index) => {
            return <li onClick={() => handleSelected(index)} className={`${project === index && 'project-active'} project-item`} key={index}>{item.name}</li>
          })}
        </ul>
        <div className='project-info'>
          {projects[project].img && <ul className='project-info-selection'>
            <li className={`${projectInfo === 0 && 'project-info-active'} project-info-item`} onClick={() => setProjectInfo(0)}>Informações</li>
            <li className={`${projectInfo === 1 && 'project-info-active'} project-info-item`} onClick={() => setProjectInfo(1)}>Imagem</li>
          </ul>}
          {projectInfo === 0 && <div className='project-textgroup'>
            <h3>{projects[project].resume}</h3>
            <h4>{projects[project].name}</h4>
            <p>{projects[project].description}</p>
          </div>}
          {projectInfo === 1 && <img className='project-img' src={projects[project].img} alt={projects[project].name} />}
        </div>
      </div>
    </section>
  )
}
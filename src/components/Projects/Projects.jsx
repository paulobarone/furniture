import './Projects.css';
import { useState } from "react";

export default function Projects() {
  const [project, setProject] = useState(0);

  const projects = [
    {
      name: 'Project 1',
      resume: 'Resume of Project 1',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat et laboriosam harum. Quas, temporibus quam.'
    },
    {
      name: 'Project 2',
      resume: 'Resume of Project 2',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat et laboriosam harum. Quas, temporibus quam.'
    },
    {
      name: 'Project 3',
      resume: 'Resume of Project 3',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat et laboriosam harum. Quas, temporibus quam.'
    }
  ]

  return (
    <section className="projects">
      <h2>Projetos</h2>
      <div className='projects-container'>
        <ul className='projects-list'>
          {projects.map((item, index) => {
            return <li onClick={() => setProject(index)} className={`${project === index && 'project-active'} project-item`} key={index}>{item.name}</li>
          })}
        </ul>
        <div className='project-info'>
          <h3>{projects[project].resume}</h3>
          <h4>{projects[project].name}</h4>
          <p>{projects[project].description}</p>
        </div>
      </div>
    </section>
  )
}
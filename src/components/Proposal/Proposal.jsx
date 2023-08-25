import './Proposal.css';
import projectImg from '../../assets/projec-img.svg';

export default function Proposal() {
  return (
    <section id="proposal">
      <div className='textgroup'>
        <h2>Proposta</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus velit, repellat ratione soluta magni ipsum deserunt ut praesentium itaque, sint suscipit natus quo! Beatae, adipisci magnam? Libero quos et quisquam.</p>
      </div>
      <img className='proposal-img' src={projectImg} alt='Ilustração da organização de protótipo' />
    </section>
  )
}
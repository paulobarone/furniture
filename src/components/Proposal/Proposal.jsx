import './Proposal.css';
import projectImg from '../../assets/projec-img.svg';

export default function Proposal() {
  return (
    <section id="proposal">
      <div className='textgroup'>
        <h2>Proposta</h2>
        <p className="proposal-subtitle">"Nossa paixão é moldar o futuro do mobiliário!"</p>
        <p>Nossos fundadores, unidos pela visão de um lar mais inteligente e ecológico, trouxeram à vida a Ecomod com o intuito de transformar os móveis convencionais em partes personalizadas e criativas do seu mundo e espaço pessoal</p>
      </div>
      <img className='proposal-img' src={projectImg} alt='Ilustração da organização de protótipo' />
    </section>
  )
}
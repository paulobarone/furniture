import './Contact.css';
import contactImg from '../../assets/contact-img.png';
import Button from '../Button/Button';

export default function Contact() {
	return (
		<section id='contact'>
			<div className='contact-container'>
				<img className='contact-img' src={contactImg} alt='Cosméticos ecológicos' />
				<div className='contact-infos'>
					<div className='contact-textgroup'>
						<h3>Mande-nos uma mensagem!</h3>
						<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque, suscipit.</p>
					</div>
					<form className='contact-form'>
						<div className='contact-input-container'>
							<label className='contact-label'>Nome</label>
							<input className='contact-input' type="text" placeholder="Insira seu nome" />
						</div>
						<div className='contact-input-container'>
							<label className='contact-label'>E-mail</label>
							<input className='contact-input' type="mail" placeholder="Insira seu e-mail" />
						</div>
						<div className='contact-input-container'>
							<label className='contact-label'>Mensagem</label>
							<span name="message" className={`span-textarea contact-input`} onChange={(e) => console.log(e)} role="textbox" contentEditable></span>
						</div>
						<Button>Enviar</Button>
					</form>
				</div>
			</div>
		</section>
	)
}
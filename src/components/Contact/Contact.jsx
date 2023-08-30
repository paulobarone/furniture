import './Contact.css';
import contactImg from '../../assets/contact-img.png';
import Button from '../Button/Button';
import ValidationForm from '../../utils/ValidationForm';
import { useRef, useState } from 'react';
import { Alert } from "@mui/material";

export default function Contact() {
	const [errors, setErrors] = useState({ name: null, email: null });
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [showAlert, setShowAlert] = useState(false);

	const alert = useRef();
	const messageInput = useRef();

	const updatePropError = (propName, dataProp) => {
    setErrors((prevData) => {
      return { ...prevData, [propName]: dataProp };
    });
  }
	
	const handleSubmit = (event) => {
		event.preventDefault();

		setName('');
		setEmail('');
		messageInput.current.innerHTML = '';

		setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
	}

	return (
		<section id='contact'>
			<div className='contact-container'>
				<img className='contact-img' src={contactImg} alt='Cosméticos ecológicos' />
				<div className='contact-infos'>
					<div className='contact-textgroup'>
						<h3>Mande-nos uma mensagem!</h3>
						<p>Queremos ouvir você! Entre em contato para nos conhecer e tirar suas dúvidas conosco, juntos moldaremos o futuro!</p>
					</div>
					<form onSubmit={(e) => handleSubmit(e)} className='contact-form'>
						{showAlert && <Alert ref={alert} className="alert" variant="filled" severity="success">Mensagem enviada com sucesso!</Alert>}
						<div className='contact-input-container'>
							<label className='contact-label'>Nome</label>
							<input className={`contact-input ${errors.name && 'invalid'}`} required onChange={(event) => setName(event.target.value)} name='name' onBlur={(e) => updatePropError(e.target.name, ValidationForm(e.target))} value={name} type="text" placeholder="Insira seu nome" />
							{ errors.name && <span className='error-message'>{errors.name}</span> }
						</div>
						<div className='contact-input-container'>
							<label className='contact-label'>E-mail</label>
							<input className={`contact-input ${errors.email && 'invalid'}`} required onChange={(event) => setEmail(event.target.value)} name='email' onBlur={(e) => updatePropError(e.target.name, ValidationForm(e.target))} value={email} type="email" placeholder="Insira seu e-mail" />
							{ errors.email && <span className='error-message'>{errors.email}</span> }
						</div>
						<div className='contact-input-container'>
							<label className='contact-label'>Mensagem</label>
							<span ref={messageInput} name="message" className={`span-textarea contact-input`} role="textbox" contentEditable></span>
						</div>
						<Button>Enviar</Button>
					</form>
				</div>
			</div>
		</section>
	)
}
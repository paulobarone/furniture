export default function ValidationInput(input) {
	const errorTypes = [
		'valueMissing',
		'typeMismatch'
	]

	const errorMessages = {
		name: {
			valueMissing: 'O campo não pode estar vazio.'
		},
		email: {
			valueMissing: 'O campo não pode estar vazio.',
			typeMismatch: 'O e-mail digitado não é válido.'
		}
	}

	let message = '';
	errorTypes.forEach((error) => {
		if(input.validity[error]) {
			message = errorMessages[input.name][error]
		}
	})

	return message
}
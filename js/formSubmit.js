function formSubmit() {
	let form = document.forms.mainForm;
	let firstName = form.elements.firstName;
	let lastName = form.elements.lastName;
	let phone = form.elements.formsPhone;
	let email = form.elements.formsEmain;
	let textarea = form.elements.formMessage;

	function validateEmail(email) {
	    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	    return re.test(String(email).toLowerCase());
	}

	function checkField(name) {
		let parentElement = name.parentElement;
		let errorMessage = parentElement.querySelector('span');
		if(name.value.length === 0){
			errorMessage.innerHTML = 'The text field is required.';
		}else errorMessage.innerHTML = '';
	}


	function checkName(event) {
		let errorMessage = this.parentElement.querySelector('span');
		if(this.value.length === 0){
			errorMessage.innerHTML = 'The text field is required.';
		}else if(this.value.length > 0 && this.value.length < 4){
			errorMessage.innerHTML = 'The text field should has at least 4 symbols.';
		}else errorMessage.innerHTML = '';
	}

	function blurCheck(event) {
		let errorMessage = this.parentElement.querySelector('span');
		if(this.value.length === 0){
			errorMessage.innerHTML = 'The text field is required.';
		}
	}

	function checkMessage (event) {
		let errorMessage = this.parentElement.querySelector('span');
		if(this.value.length === 0){
			errorMessage.innerHTML = 'The text field is required.';
		}else errorMessage.innerHTML = '';
	}

	function checkPhone(event) {
		let errorMessage = this.parentElement.querySelector('span');
		if(this.value.length === 0){
			errorMessage.innerHTML = 'The text field is required.';
		}else if(isNaN(this.value) || this.value.length !== 10){
			errorMessage.innerHTML = 'Invalid phone number format.';
		}else errorMessage.innerHTML = '';
	}

	function checkEmail(event) {
		let errorMessage = this.parentElement.querySelector('span');
		if(this.value.length === 0){
			errorMessage.innerHTML = 'The text field is required.';
		}else if(!validateEmail(this.value)){
			errorMessage.innerHTML = 'The email is not a valid.';
		}else errorMessage.innerHTML = '';
	}

	firstName.addEventListener('input', checkName);
	firstName.addEventListener('blur', blurCheck);

	lastName.addEventListener('input', checkName);
	lastName.addEventListener('blur', blurCheck);

	textarea.addEventListener('input', checkMessage);
	textarea.addEventListener('blur', blurCheck);

	phone.addEventListener('input', checkPhone);
	phone.addEventListener('blur', blurCheck);

	email.addEventListener('input', checkEmail);
	email.addEventListener('blur', blurCheck);

	form.onsubmit = function (event) {
		event.preventDefault();
		checkField(firstName);
		checkField(lastName);
		checkField(phone);
		checkField(textarea);
		checkField(email);
	}
}
formSubmit();
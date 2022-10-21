'use strict';

const regexEmail = /^([\w-])+\@(gmail\.com|email\.com|xbox\.com)+$/;
const form = document.getElementById("form");
const input = document.getElementById("mail");
const button = document.getElementById("email-button");

let allSection = document.getElementsByTagName('section'); 
let succesfullyWindow = document.querySelector('.succesfully-window'); 
let confirmButton = document.getElementById('confirm'); 


function isEmail(value) {
	return regexEmail.test(value);
}

form.addEventListener("submit", (e) => {

	if (isEmail(input.value)) {
		form.style.border = 'none';
		input.style.color = "white";
		input.value = '';
		allSection[0].classList.add('blur-window'); 
		allSection[1].classList.add('blur-window'); 
		allSection[2].classList.add('blur-window'); 
		allSection[3].classList.add('blur-window'); 
		allSection[4].classList.add('blur-window');
		succesfullyWindow.style.display = 'flex'; 
	} else {
		e.preventDefault();
		form.style.border = '3px solid red';
		input.style.color = "red";
	}

})

confirmButton.addEventListener('click', () => { 
    allSection[0].classList.remove('blur-window'); 
    allSection[1].classList.remove('blur-window'); 
    allSection[2].classList.remove('blur-window'); 
    allSection[3].classList.remove('blur-window'); 
    allSection[4].classList.remove('blur-window'); 
    succesfullyWindow.style.display = 'none'; 
});






// import './style.css'

const loginForm = document.getElementById('loginForm');
const emailInput = document.getElementById('email');
const senhaInput = document.getElementById('senha');
const emailError = document.getElementById('error-email');
const senhaError = document.getElementById('error-senha');

console.log("Hello Wordl")

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();

    emailError.textContent = '';
    senhaError.textContent = '';
    

    let formValido = true;

    if (emailInput.value.trim() === "") {
        emailError.textContent = 'O campo de e-mail é obrigatório.';
        formValido = false;
    }

    if (senhaInput.value.trim() === "") {
        senhaError.textContent = 'O campo de senha é obrigatório.';
        formValido = false;
    }

    if (formValido) {
        alert('Login realizado com sucesso!');
    }
});
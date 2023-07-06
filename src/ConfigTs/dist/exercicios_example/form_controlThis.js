"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const isEmail_1 = __importDefault(require("validator/lib/isEmail"));
const SHOW_ERROR_MESSAGE = 'show-error-message';
const form = document.querySelector('.form');
const username = document.querySelector('.username');
const email = document.querySelector('.email');
const password = document.querySelector('.password');
const password2 = document.querySelector('.password2');
const submitEventFn = (event) => {
    event.preventDefault();
    const target = event.target;
    //metodos:
    hiderErrorMsg(target);
    checkForEmptyFields(username, email, password, password2);
    checkEmail(email);
    checkEqualPassword(password, password2);
    if (shouldSendForm(target))
        console.log(form.submit(), 'enviado com sucesso!');
};
form.addEventListener('submit', submitEventFn);
//check email
function checkEmail(input) {
    if (!(0, isEmail_1.default)(input.value))
        showErrorMessage(input, 'Email está inválido!');
}
//check campos
function checkForEmptyFields(...inputs) {
    inputs.forEach((input) => {
        if (!input.value)
            showErrorMessage(input, 'Este campo não pode fica vazio');
    });
}
//check senha
function checkEqualPassword(password, password2) {
    if (password.value !== password2.value) {
        showErrorMessage(password, 'Senha inválida');
        showErrorMessage(password2, 'Senha não Confere');
    }
}
// apagar as msg
function hiderErrorMsg(form) {
    form
        .querySelectorAll('.' + SHOW_ERROR_MESSAGE)
        .forEach((item) => item.classList.remove(SHOW_ERROR_MESSAGE));
}
//config mostrar msg
function showErrorMessage(input, msg) {
    const formFields = input.parentElement;
    const errorMessage = formFields.querySelector('.error-message');
    errorMessage.innerText = msg;
    formFields.classList.add(SHOW_ERROR_MESSAGE);
}
// checagem pra enviar form
function shouldSendForm(form) {
    let sendForm = true;
    form
        .querySelectorAll('.' + SHOW_ERROR_MESSAGE)
        .forEach(() => (sendForm = false));
    return sendForm;
}
//# sourceMappingURL=form_controlThis.js.map
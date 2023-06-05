// Capturas de elementos no DOM
const form = document.querySelector('#evaluation-form');
const inputEmail = document.getElementById('email');
const inputSenha = document.getElementById('password');
const btnLogin = document.querySelector('.trybewarts-login button');
const submitButton = document.querySelector('#submit-btn');
const textArea = document.querySelector('#textarea');
const span = document.querySelector('span');
const inputName = document.querySelector('#input-name');
const lastName = document.querySelector('#input-lastname');
const email = document.querySelector('#input-email');
const selected = document.querySelector('select');
const inputCheckbox = document.querySelectorAll('input[type="checkbox"]');

function verificaCheckbox() {
  const array = [];
  for (let i = 0; i < inputCheckbox.length; i += 1) {
    if (inputCheckbox[i].checked) {
      array.push(inputCheckbox[i].value);
    }
    if (array.includes('on')) {
      array.splice(array.indexOf('on'), 2);
    }
  }
  return array;
}

function counter() {
  textArea.addEventListener('input', () => {
    const limite = 500;
    const input = textArea.value.length;
    const caracteresRestantes = limite - input;
    span.innerText = caracteresRestantes;
  });
}

function verifyLogin() {
  btnLogin.addEventListener('click', (e) => {
    e.preventDefault();
    if (inputEmail.value === 'tryber@teste.com' && inputSenha.value === '123456') {
      alert('Olá, Tryber!');
    } else {
      alert('Email ou senha inválidos.');
    }
  });
}
const formData = document.getElementById('form-data');
const list = document.createElement('ul');
formData.appendChild(list);

function createList(obj) {
  const values = Object.values(obj);
  for (let index = 0; index < values.length; index += 1) {
    const listItem = document.createElement('li');
    formData.appendChild(listItem);
    const items = document.getElementsByTagName('li');
    items[index].innerText = `${values[index]}`;
  }
}

const sbmtBtn = () => {
  submitButton.addEventListener('click', (event) => {
    event.preventDefault();
    const studentData = {
      nome: `Nome: ${inputName.value} ${lastName.value}`,
      email: `Email: ${email.value}`,
      casa: `Casa: ${selected.value}`,
      família: `Família: ${form.family.value}`,
      matérias: `Matérias: ${verificaCheckbox().join(', ')}.`,
      avaliação: `Avaliação: ${form.rate.value}`,
      observacoes: `Observações: ${form.textarea.value}`,
    };
    createList(studentData);
    const evForm = document.querySelector('.evaluation-form');
    formData.style.display = 'flex';
    evForm.style.display = 'none';
  });
};

const checkBox = () => {
  const checkBoxAgreement = document.getElementById('agreement');
  checkBoxAgreement.addEventListener('click', (event) => {
    submitButton.disabled = !event.target.checked;
  });
};

window.onload = () => {
  verifyLogin();
  sbmtBtn();
  checkBox();
  counter();
};

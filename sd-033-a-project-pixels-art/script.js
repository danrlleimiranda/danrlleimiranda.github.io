const body = document.getElementsByTagName('body')[0];
const createElement = (element) => {
  const elemento = document.createElement(element);
  body.appendChild(elemento);
};
createElement('h1');
createElement('section');
createElement('button');
const btnClear = document.createElement('button');

btnClear.setAttribute('id', 'clear-board');
btnClear.innerText = 'Limpar';
createElement('div');

const btn = document.querySelector('button');

const h1 = document.querySelector('h1');
h1.setAttribute('id', 'title');
h1.innerText = 'Paleta de Cores';

const divPallet = document.querySelector('section');
divPallet.setAttribute('id', 'color-palette');
divPallet.style.textAlign = 'center';

function createPallet() {
  for (let index = 0; index < 4; index += 1) {
    const elemento = document.createElement('div');
    divPallet.appendChild(elemento);
    elemento.className = 'color';
  }
}
createPallet();
divPallet.appendChild(btn);
divPallet.appendChild(btnClear);
btn.innerText = 'Cores aleatórias';
btn.setAttribute('id', 'button-random-color');
const divs = document.querySelectorAll('.color');
divs[0].style.backgroundColor = 'black';

function createColor() {
  const arrayColors = [];
  for (let c = 0; c < 100; c += 1) {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const randomColor = `(${r}, ${g}, ${b})`;
    arrayColors.push(randomColor);
  }
  return arrayColors;
}

const generateColors = () => {
  const returnColor = createColor();
  const divStyle = [];
  btn.addEventListener('click', () => {
    for (let index = 1; index < divs.length; index += 1) {
      const randomIndex = Math.floor(Math.random() * returnColor.length - 1);
      divs[index].style.backgroundColor = `rgb${returnColor[randomIndex]}`;
      divStyle[index - 1] = divs[index].style.backgroundColor;
      localStorage.setItem('colorPalette', JSON.stringify(divStyle));
    }
  });
};

function recoveryPallete() {
  const recovery = JSON.parse(localStorage.getItem('colorPalette'));
  if (!recovery) {
    divs[1].style.backgroundColor = 'red';
    divs[2].style.backgroundColor = 'blue';
    divs[3].style.backgroundColor = 'green';
  } else {
    for (let index = 1; index < divs.length; index += 1) {
      divs[index].style.backgroundColor = recovery[index - 1];
    }
  }
}

const pixels = document.querySelector('body').lastElementChild;
pixels.style.display = 'flex';
pixels.style.flexFlow = 'row wrap';
pixels.style.border = '1px solid black';
pixels.style.width = '210px';
pixels.style.height = '200px';
pixels.style.margin = 'auto';
// pixels.style.marginTop = '50px';
pixels.setAttribute('id', 'pixel-board');

const createPixels = () => {
  for (let index = 0; index < 25; index += 1) {
    const pixel = document.createElement('div');
    pixel.className = 'pixel';
    pixel.style.backgroundColor = 'white';
    pixel.style.border = '1px solid black';
    pixel.style.width = '40px';
    pixel.style.height = '40px';
    pixels.appendChild(pixel);
  }
};
const pixel = document.getElementsByClassName('pixel');
const divStyle = document.getElementById('color-palette');

function alwaysBlack() {
  const black = document.getElementById('color-palette').firstElementChild;
  for (let index = 1; index < divs.length; index += 1) {
    black.className = 'color selected';
    if (divs[index].className === 'color selected') {
      divs[index].classList.remove('selected');
    }
  }
}
let selected = divs[0].style.backgroundColor;

function selectedColor() {
  divStyle.addEventListener('click', (event) => {
    const evento = event.target;
    for (let index = 0; index < divs.length; index += 1) {
      selected = event.target.style.backgroundColor;
      if (evento.className === 'color') {
        const firstClass = document.querySelector('.color.selected');
        firstClass.classList.remove('selected');
        evento.className = 'color selected';
      }
    }
  });
  pixels.addEventListener('click', (evento) => {
    const retorno = selected;
    evento.target.style.backgroundColor = retorno;
    changeLocal();
  });
}
function clearBoard() {
  const clear = document.querySelector('#clear-board');
  clear.addEventListener('click', () => {
    for (let index = 0; index < pixel.length; index += 1) {
      pixel[index].style.backgroundColor = 'white';
    }
  });
}

function changeLocal() {
  const recoverBoard = document.querySelectorAll('.pixel');
  const arrayBoard = [];
  for (let index = 0; index < recoverBoard.length; index += 1) {
    arrayBoard.push(recoverBoard[index].outerHTML);
  }
  localStorage.setItem('pixelBoard', JSON.stringify(arrayBoard));
}

function recoveryBoard() {
  const localBoard = JSON.parse(localStorage.getItem('pixelBoard'));
  const recoverBoard = document.querySelectorAll('.pixel');
  for (let index = 0; index < recoverBoard.length; index += 1) {
    if (!localBoard) {
      recoverBoard.outerHTML = pixel.outerHTML;
    } else {
      recoverBoard[index].outerHTML = localBoard[index];
    }
  }
}

window.onload = () => {
  generateColors();
  createPixels();
  recoveryPallete();
  alwaysBlack();
  selectedColor();
  clearBoard();
  recoveryBoard();
};

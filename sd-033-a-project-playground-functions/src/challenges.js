// Desafio 1 - Crie a função compareTrue
const compareTrue = (animal1, animal2) => (animal1 === true && animal2 === true);
// Desafio 2 - Crie a função splitSentence
const splitSentence = (sentence) => sentence.split(' ');
// Desafio 3 - Crie a função concatName
function concatName(array) {
  let arr = array;
  let primeiroValor = arr[0];
  let ultimoValor = arr[arr.length - 1];
  return `${ultimoValor}, ${primeiroValor}`;
}
// Desafio 4 - Crie a função footballPoints
function footballPoints(wins, ties) {
  let win = 3 * wins;
  let tie = 1 * ties;
  return win + tie;
}
// Desafio 5 - Crie a função highestCount
function highestCount(array) {
  const arrayMax = Math.max(...array);
  let repetições = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] === arrayMax) {
      repetições += 1;
    }
  }
  return repetições;
}
// Desafio 6 - Crie as funções calcTriangleArea, calcRectangleArea e calcAllAreas
const calcTriangleArea = (base, height) => (base * height) / 2;
const calcRectangleArea = (base, height) => base * height;
function calcAllAreas(base, height, form) {
  let triangleArea = calcTriangleArea(base, height);
  let rectangleArea = calcRectangleArea(base, height);
  if (form === 'triângulo') {
    return `O valor da área do triângulo é de: ${triangleArea}`;
  }
  if (form === 'retângulo') {
    return `O valor da área do retângulo é de: ${rectangleArea}`;
  }
  if (form === 'quadrado' && base !== height) {
    return 'Não foi possível fazer o cálculo, insira uma forma geométrica válida';
  }
}
// Desafio 7 - Crie a função catAndMouse
function catAndMouse(mouse, cat1, cat2) {
  let distance1 = Math.abs(mouse - cat1);
  let distance2 = Math.abs(mouse - cat2);
  if (distance1 < distance2) {
    return 'cat1';
  }
  if (distance2 < distance1) {
    return 'cat2';
  }
  if (distance1 === distance2) {
    return 'os gatos trombam e o rato foge';
  }
}
// Desafio 8 - Crie a função fizzBuzz
function fizzBuzz(array) {
  let stringArr = [];
  let arr = array;
  for (let index = 0; index < arr.length; index += 1) {
    if (arr[index] % 3 === 0 && arr[index] % 5 !== 0) {
      stringArr.push('fizz');
    }
    if (arr[index] % 5 === 0 && arr[index] % 3 !== 0) {
      stringArr.push('buzz');
    }
    if (arr[index] % 3 === 0 && arr[index] % 5 === 0) {
      stringArr.push('fizzBuzz');
    }
    if (arr[index] % 3 !== 0 && arr[index] % 5 !== 0) {
      stringArr.push('bug!');
    }
  }
  return stringArr;
}
// Desafio 9 - Crie a função encode e a função decode /replaceAll()
function encode(string) {
  let divString = string.split('');
  for (let index = 0; index < divString.length; index += 1) {
    if (divString[index] === 'a') {
      divString[index] = 1;
    }
    if (divString[index] === 'e') {
      divString[index] = 2;
    }
    if (divString[index] === 'i') {
      divString[index] = 3;
    }
    if (divString[index] === 'o') {
      divString[index] = 4;
    }
    if (divString[index] === 'u') {
      divString[index] = 5;
    }
  }
  return divString.join('');
}
function decode(code) {
  let divCode = code.split('');
  for (let index = 0; index < divCode.length; index += 1) {
    if (divCode[index] === '1') {
      divCode[index] = 'a';
    }
    if (divCode[index] === '2') {
      divCode[index] = 'e';
    }
    if (divCode[index] === '3') {
      divCode[index] = 'i';
    }
    if (divCode[index] === '4') {
      divCode[index] = 'o';
    }
    if (divCode[index] === '5') {
      divCode[index] = 'u';
    }
  }
  return divCode.join('');
}
// Desafio 10 - Crie a função techList
function techList(techArray, nome) {
  let arrayObj = [];
  if (techArray === []) {
    arrayObj = [''];
  }
  for (let index of techArray.sort()) {
    arrayObj.push({
      tech: index,
      name: nome,
    });
  }
  return arrayObj;
}
// Não modifique essas linhas
module.exports = {
  calcTriangleArea: typeof calcTriangleArea === 'function' ? calcTriangleArea : (() => {}),
  calcRectangleArea: typeof calcRectangleArea === 'function' ? calcRectangleArea : (() => {}),
  calcAllAreas: typeof calcAllAreas === 'function' ? calcAllAreas : (() => {}),
  catAndMouse: typeof catAndMouse === 'function' ? catAndMouse : (() => {}),
  compareTrue: typeof compareTrue === 'function' ? compareTrue : (() => {}),
  concatName: typeof concatName === 'function' ? concatName : (() => {}),
  decode: typeof decode === 'function' ? decode : (() => {}),
  encode: typeof encode === 'function' ? encode : (() => {}),
  fizzBuzz: typeof fizzBuzz === 'function' ? fizzBuzz : (() => {}),
  footballPoints: typeof footballPoints === 'function' ? footballPoints : (() => {}),
  highestCount: typeof highestCount === 'function' ? highestCount : (() => {}),
  splitSentence: typeof splitSentence === 'function' ? splitSentence : (() => {}),
  techList: typeof techList === 'function' ? techList : (() => {}),
};

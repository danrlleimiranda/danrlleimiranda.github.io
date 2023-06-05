// Desafio 11 - Crie a função generatePhoneNumber
function generatePhoneNumber(array) {
  const n = array;
  const arrSor = [...n].sort();
  if (array.length !== 11) return 'Array com tamanho incorreto.';
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] < 0 || array[index] > 9) return 'não é possível gerar um número de telefone com esses valores';
    if (arrSor[index] === arrSor[index + 2]) return 'não é possível gerar um número de telefone com esses valores';
  }
  return `(${n.slice(0, 2).join('')}) ${n.slice(2, 7).join('')}-${n.slice(7).join('')}`;
}
// Desafio 12 -  Crie a função triangleCheck

// Desafio 13 - Crie a função hydrate
function stringHydrate(string) {
  let regex = /\d+/g;
  let numberS = string.match(regex);
  return (numberS);
}

function sum(string) {
  let arrayN = stringHydrate(string)
  let cups = 0;
  for (let index of arrayN) {
    // eslint-disable-next-line radix
    cups += parseInt(index);
  }
  return cups;
}

function hydrate(string) {
  const cups = sum(string);
  if (cups === 1) {
    return `${cups} copo de água`;
  }
  return `${cups} copos de água`;
}


// Não modifique essas linhas
module.exports = {
  generatePhoneNumber: typeof generatePhoneNumber === 'function' ? generatePhoneNumber : (() => {}),
  triangleCheck: typeof triangleCheck === 'function' ? triangleCheck : (() => {}),
  hydrate: typeof hydrate === 'function' ? hydrate : (() => {}),
};

/* eslint-disable no-var */
/* eslint-disable block-scoped-var */
/* eslint-disable no-redeclare */
/* eslint-disable vars-on-top */

/*
  A função myCounter possui dois loops aninhados que inserem valores dentro de um array.
  Como podemos perceber, eles vão adicionando valores ao array até sua condição de parada.
  Corrija a função myCounter, sem eliminar nenhum dos loops de repetição, para que a função retorne o array correto.

  Parâmetros:
  - Nenhum.

  Comportamento:
  myCounter() // Retorna: [0, 2, 3, 1, 2, 3, 2, 2, 3, 3, 2, 3];
*/

const myCounter = () => {
  var myArray = [];
  for (let c = 0; c <= 3; c += 1) {
    myArray.push(c);
    for (let c2 = 2; c2 <= 3; c2 += 1) {
      myArray.push(c2);
    }
  }
  return myArray;
};

module.exports = myCounter;

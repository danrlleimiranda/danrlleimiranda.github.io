/* eslint-disable max-len */
/* eslint-disable no-unused-vars */

const numbers = require('../src/numbers');

/*
  A função `numbers` recebe um array de tamanho variável e retorna `true` se todos os parâmetros forem do tipo 'number' e `false` caso contrário.

  Parâmetros:
    - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, 'a']; [].
  Comportamento:
    - numbers([2, 3, 4]); // Retorna: true
    - numbers([2, 'errado', 5]); // Retorna: false

*/

describe('2 - Implemente os casos de teste para a função `numbers`', () => {
  it('Verifica se a função `numbers` retorna `true` quando o array contém apenas números e falso caso contrário', () => {
    const array1 = [1, 2, 3, 4, 5];
    const array2 = [1, 2, '3', 4, 5]; 
    const array3 = [1, 'a', 3]
    const array4 = [' ']

    expect(numbers(array1)).toBeTruthy();
    expect(numbers(array2)).toBeFalsy();
    expect(numbers(array3)).toBeFalsy();
    expect(numbers(array4)).toBeFalsy();
  });
});

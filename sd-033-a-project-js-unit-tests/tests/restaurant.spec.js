const createMenu = require('../src/restaurant');
 
describe('10 - Implemente a função `createMenu`, bem como seus casos de teste', () => {
  it('Verifica se a função `createMenu` tem o comportamento esperado', () => {
   
    // Escreva todos os testes aqui.

    // Escreva dois testes, um que verifica se a função createMenu() retorna um objeto que possui a chave fetchMenu e outro verificando se o valor da chave fetchMenu do objeto retornado pela função createMenu() é uma função.
    expect(Object.keys(createMenu())[0]).toEqual('fetchMenu');
    expect(typeof createMenu().fetchMenu).toEqual('function');

    // Escreva um teste que verifica se o objeto retornado pela função createMenu({ food: {}, drinks: {} }).fetchMenu() retorna um objeto cujas chaves são somente food e drinks.
    expect(Object.keys(createMenu({ food: {}, drinks: {} }).fetchMenu())).toEqual(['food', 'drinks']);

    // Escreva um teste que verifica se o menu passado pra função createMenu() é idêntico ao menu recuperado pela função createMenu({ food: {}, drinks: {} }).fetchMenu().
    expect(createMenu({ food: {}, drinks: {} }).fetchMenu()).toEqual({ food: {}, drinks: {} });

    // Escreva um teste que verifica se a propriedade consumption do objeto retornado pela função createMenu({ food: {}, drinks: {} }), após a criação do menu, retorna um array vazio.
    expect(createMenu({ food: {}, drinks: {} }).consumption).toEqual([]);
   
    // A função createMenu retorna um objeto. Certo? Esse objeto até aqui já possui algumas chaves(keys). Nosso objeto retornado pela função createMenu tem essa aparência:
    expect(() => {createMenu({ food: { coxinha: 3.90, sanduiche: 9.90 },
      drinks: { agua: 3.90, cerveja: 6.90 } }).order('pizza')}).toThrow('Item indisponível');

    // Escreva um teste que verifica se, ao adicionar três pedidos em sequência, dentre bebidas e comidas, o array consumption contém os itens pedidos.
    const objCreate = createMenu({ food: { coxinha: 3.90, sanduiche: 9.90 },
      drinks: { agua: 3.90, cerveja: 6.90 } })
      objCreate.order('coxinha')
      objCreate.order('sanduiche')
      objCreate.order('agua')
    expect(objCreate.consumption).toEqual(['coxinha', 'sanduiche', 'agua'])

    // Escreva um teste que verifica se a função order aceita que pedidos repetidos sejam acrescidos a consumption.
    objCreate.order('cerveja')
    objCreate.order('cerveja')
    objCreate.order('cerveja')
    expect(objCreate.consumption).toEqual(expect.arrayContaining(['cerveja', 'cerveja', 'cerveja']));

    // Escreva um teste que verifica que, ao chamar a função pay() que será uma propriedade do objeto retornado pela função createMenu, deve retornar a soma dos preços de tudo que foi pedido, conforme registrado em consumption. A propriedade pay tem como valor uma função.
    const consum = objCreate.consumption
    const sum = (3.90 + 9.90 + 3.90 + 6.90 + 6.90 + 6.90)
    const fee = sum * 0.1
    const total = parseFloat(sum + fee).toPrecision(4)
      expect(consum).toHaveLength(6)
      expect(objCreate.consumption).toEqual(expect.arrayContaining(['coxinha', 'sanduiche', 'agua', 'cerveja', 'cerveja', 'cerveja']));
      expect(objCreate.pay()).toBe(total)
  });
});

/* eslint-disable max-len */
// Siga as orientações do README!

const createMenu = (obj) => {
  const objeto = { fetchMenu: () => obj, 
        consumption: [],
        order: (request) => {
            const comida = obj.food;
            const bebida = obj.drinks;
            if (!comida[request] && !bebida[request]) {
                throw new Error('Item indisponível');
            }
            return objeto.consumption.push(request);
        },
        pay: () => {
            const comida = obj.food;
            const bebida = obj.drinks;
            let sum = 0;
            for (const iterator of objeto.consumption) {
                sum += comida[iterator] || bebida[iterator];
            }
            let fee = sum * 0.1;
            return parseFloat(sum + fee).toPrecision(4);
        },
   };
   return objeto;
};
       const objCreate = createMenu({ food: { coxinha: 3.90, sanduiche: 9.90 },
        drinks: { agua: 3.90, cerveja: 6.90 } });
        objCreate.order('coxinha');
        objCreate.order('sanduiche');
        objCreate.order('agua');
        objCreate.order('agua');
        objCreate.pay();
        
module.exports = createMenu;

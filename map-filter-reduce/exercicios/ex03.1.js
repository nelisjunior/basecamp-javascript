/* 
Curso: Javascript - Map, Filter e Reduce
C�digo:
---
Aula: Na pr�tica - Parte 3
C�digo: Md9H4tq4lXw
URL: https://www.youtube.com/embed/Md9H4tq4lXw
---
M�todo: Filter
Praticando m�todo filter!
*/

function filtraPar(arr) {
    function callback(item) {
        return item % 2 === 0;
    }
    return arr.filter(callback);
}

function filtraImpar(arr) {
    function callback(item) {
        return item % 2 !== 0;
    }
    return arr.filter(callback);
}

const meuArray = [1, 23, 55, 67, 30, 2, 4];

console.log('Sem filtro: ' + meuArray);
console.log('Com filtro [Pares]: ' + filtraPar(meuArray));
console.log('Com filtro [Impares]: ' + filtraImpar(meuArray));

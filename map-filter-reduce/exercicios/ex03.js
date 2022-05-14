/* 
Curso: Javascript - Map, Filter e Reduce
C�digo:
---
Aula: Na pr�tica - Parte 3
C�digo: Md9H4tq4lXw
URL: https://www.youtube.com/embed/Md9H4tq4lXw
---
M�todo: Filter

*/

function filtraArray(arr) {
    return arr.filter(callback);
}

function callback(item) {
    return item % 2 === 0;
}

const meuArray = [1, 23, 55, 67, 30, 2, 4];

console.log('Sem filter: ' + meuArray);
console.log('Com filter, caso seja par: ' + filtraArray(meuArray));
console.log('Com filter, caso seja �mpar: ' + filtraArray(meuArray));

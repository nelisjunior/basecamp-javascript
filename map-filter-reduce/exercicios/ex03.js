/* 
Curso: Javascript - Map, Filter e Reduce
Código:
---
Aula: Na prática - Parte 3
Código: Md9H4tq4lXw
URL: https://www.youtube.com/embed/Md9H4tq4lXw
---
Método: Filter

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
console.log('Com filter, caso seja ímpar: ' + filtraArray(meuArray));

/* 
Curso: Javascript - Map, Filter e Reduce
C�digo:
---
Aula: Na pr�tica - Parte 4
C�digo: hnLflajlBjY
URL: https://www.youtube.com/embed/hnLflajlBjY
---
M�todo: Reduce
Exercicio 1: soma de Arrays
*/

function somaNumeros(arr) {
    return arr.reduce(function(prev, current) {
        console.log({prev});
        console.log({current});
        return prev + current;
    })
}

const arr = [1, 2];

console.log(somaNumeros(arr));
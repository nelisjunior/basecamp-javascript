/* 
Curso: Javascript - Map, Filter e Reduce
Código:
---
Aula: Na prática - Parte 4
Código: hnLflajlBjY
URL: https://www.youtube.com/embed/hnLflajlBjY
---
Método: Reduce
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
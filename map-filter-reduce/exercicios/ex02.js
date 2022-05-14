/* 
Curso: Javascript - Map, Filter e Reduce
Código:
---
Aula: Na prática - Parte 2
Código: i3bgUGL6xBQ
URL: https://www.youtube.com/embed/i3bgUGL6xBQ
---
Método: Map sem This

*/

function mapSemThis(arr) {
    return arr.map(function(item){
        return item * 2;
    });
}

const nums = [2, 4, 6, 8, 10];

console.log(mapSemThis(nums));

console.log(nums);

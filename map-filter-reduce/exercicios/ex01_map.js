/* 
Curso: Javascript - Map, Filter e Reduce
Código:
---
Aula: Na prática - Parte 1
Código: MHM0MV_rDwo
URL: https://www.youtube.com/embed/MHM0MV_rDwo
---
Método: Map com This

*/
const maca = {
    value: 2,
}

const laranja = {
    value: 3,
}

const nums = [1, 2];

function mapComThis(arr, thisArg) {
    return arr.map(function(item){
        return item * this.value;
    }, thisArg)
}

console.log('this -> ma??', mapComThis(nums, maca));

console.log('this -> laranja', mapComThis(nums, laranja));

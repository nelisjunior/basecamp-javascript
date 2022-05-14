/* 
Curso: Javascript - Map, Filter e Reduce
C?digo:
---
Aula: Na pr?tica - Parte 1
C?digo: MHM0MV_rDwo
URL: https://www.youtube.com/embed/MHM0MV_rDwo
---
M?todo: mapComThis

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

console.log('this -> maçã', mapComThis(nums, maca));

console.log('this -> laranja', mapComThis(nums, laranja));

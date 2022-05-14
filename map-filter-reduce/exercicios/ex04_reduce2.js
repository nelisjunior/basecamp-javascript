
/* 
Curso: Javascript - Map, Filter e Reduce
Código:
---
Aula: Na prática - Parte 4
Código: hnLflajlBjY
URL: https://youtu.be/hnLflajlBjY?t=260
---
Método: Reduce
Exercicio 2: calcula lista de preços!
*/

const lista = [
    {
        name: 'Sabao em po',
        preco: 30,
    },
    {
        name: 'Cereal',
        preco: 12
    },
    {
        name: 'toalha',
        preco: 30,
    },
];

const saldoDisponivel = 100;

function calculaSaldo(saldoDisponivel, lista) {
    return lista.reduce(function (prev, current, index) {
        console.log('Rodada ', index + 1);
        console.log({prev});
        console.log({current});
        return prev - current.preco;
    }, saldoDisponivel);
}

console.log(calculaSaldo(saldoDisponivel, lista));

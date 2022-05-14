
/* 
Curso: Javascript - Map, Filter e Reduce
C�digo:
---
Aula: Na pr�tica - Parte 4
C�digo: hnLflajlBjY
URL: https://youtu.be/hnLflajlBjY?t=260
---
M�todo: Reduce
Exercicio 2: calcula lista de pre�os!
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

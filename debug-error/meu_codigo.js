// Atividade

function verifyArray(arr, numero) {
    try {
        if (!arr && !numero)
            throw new ReferenceError('Você deve informar os parêmetros!');

        if (typeof arr !== 'object')
            throw new TypeError('Array deve ser do tipo object!');

        if (typeof numero !== 'number')
            throw new TypeError('Numero deve ser do tipo Number!');

        if (arr.lenght !== numero)
            throw new RangeError('Tamanho inválido!');

    return arr;
    } catch (e) {
        if (e instanceof ReferenceError) {
            console.log('ReferenceError aqui!');
            console.log(e.message);
        }

        else if (e instanceof TypeError) {
            console.log('TypeError aqui!');
            console.log(e.message);
        }

        else if (e instanceof RangeError) {
            console.log('RangeError aqui!');
            console.log(e.message);
        }

        else if (e instanceof EvalError) { // Teste
            alert(e.name + ': ' + e.message);
        }

        else {
            console.log('Erro não declarado!' + e);
            console.log(e.message);
        }
    }
}

console.log(verifyArray([1, 2, 3, 4], 4));
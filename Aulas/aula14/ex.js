let operacoes = {
    soma: function (num1, num2){
        return num1 + num2
    }
}

let soma1 = operacoes.soma(5,5);
console.log(soma1);

module.exports = operacoes;
/* micro desafio 1
function teste1(x,y){
    return y - x
}
teste1(10,40);

console.log(teste1(10,40)); */

/*micro desafio 2*
function teste2(x,y) {
    return x * 2
    console.log (x)
    return x / 2
}
teste2(10);
console.log(teste2(10));*/

/*1. Função Simples cm to pol
function valoreEmPolegadas(x){
    let converterParaCentimetros = 2.54
    return x * converterParaCentimetros
}
valoreEmPolegadas(15);

console.log (valoreEmPolegadas(15));*/

/*2. Crie uma função que receba uma string e a converta em URL
function meuSite(x){
    let inicial = "https://";
    return inicial + x; 
}
console.log(meuSite("gustavobrock.github.io/Aulas-FI-CTD/Aula12/index.html"))*/

/*3. Crie uma função que recebe uma string e retorna a mesma frase, mas com o caracter de exclamação ( ! ).
function mudarFrase(minhaFrase){
    return minhaFrase + '!'
}
console.log(mudarFrase('Naruto é top'))*/

/*4. Crie uma função que calcule a idade dos cachorros, considerando que 1 ano humano, equivale a 7 anos para eles.
function idadeDoSerHumano(anosHumanos){
    let converterAnosCachorro = 7.0
    return anosHumanos * converterAnosCachorro
}
idadeDoSerHumano(10);

console.log (idadeDoSerHumano(10));*/

/*5. Crie uma função que calcule o valor da sua hora de trabalho, tendo como parâmetro o seu salário mensal.
function HorasTrab (salarioMensal){
    return salarioMensal / 120
}
HorasTrab(2500)
    console.log(HorasTrab(2500));*/

/*6. crie uma função de claculadora de IMC
function calculadoraIMC (peso, altura){
    return peso / (altura * altura);
}
console.log("O seu IMC é de " + calculadoraIMC(86, 1.83))*/

//Execícios avançados

/* 7. Crie uma função que receba uma string em minúsculas, converta-a em maiúsculas e as retorne. 
Investigue o que o método de .toUpperCase() faz.

function converterMaicusculas (meutexto){
    return (meutexto).toUpperCase();
}
console.log(converterMaicusculas("tenho a melhor noiva do mundo!!!"))*/

/* 8. Crie uma função que receba um parâmetro e retorne o tipo de dado deste parâmetro.
Dica: Isso te ajudará a entender o que o operador typeof faz.

function quemSouEu (parametro){
    return typeof parametro
}
console.log(quemSouEu(123)) */

/* 9. Crie uma função pela qual passamos o raio de um círculo e ela retorna a circunferência.
Dica: Investigue se o objeto Math tem entre suas propriedades o número Pi.

function calculeCircunferencia(raio) {
    let circunferencia = (2* Math.PI * raio).toFixed(2);
    return "O valor da circunferência é " + circunferencia;
}

console.log(calculeCircunferencia(5));*/
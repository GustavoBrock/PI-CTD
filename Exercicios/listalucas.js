// LISTA DE EXERCÍCIOS I
// Escreva um programa utilizando a linguagem JS para cada um dos problemas abaixo:

// 1. Dado o tamanho da base e da altura de um retângulo, calcular a sua área e o seu perímetro.
/* function calcArePerRetangulo (base,altura){
    let area = base * altura;
    let perimetro = 2*base + 2*altura;
    return "1) a area do retângulo é " + area + " e seu perímetro é " + perimetro; 
}
console.log(calcArePerRetangulo(2,3)); */

// 2. Dado o tamanho do lado de um quadrado, calcular a área e o perímetro do mesmo.
/* function calcArePerQuadrado (lado){
 let area = lado*2;
 let perimetro = lado*4;
 return "2) a area do quadrado é " + area + " e seu perímetro é " + perimetro;
}
console.log(calcArePerQuadrado(2)); */

// 3. Dado o tamanho do raio de uma circunferência, calcular a área e o perímetro da mesma.
/* function calcArePerCircunferencia (raio){
    let area = Math.PI.toFixed(2) * (raio*raio);
    let perimetro = 2 * Math.PI.toFixed(2) * raio;
    return "3) a area da circunferencia é " + area + " e seu perímetro é " + perimetro;
}
console.log(calcArePerCircunferencia(3)); */

// 4. Dado os três lados de um triângulo determinar o perímetro do mesmo.
/*   function calcPerTriangulo (lado1, lado2, lado3){
    let perimetro = lado1 + lado2 + lado3;
    return "4) O perímetro do triângulo é " + perimetro;
}
console.log(calcPerTriangulo(1,2,3));

function qualTriangulo (lado1, lado2, lado3){
    if (lado1 == lado2 && lado1 == lado3){
        console.log("temos um triangulo equilatero")
    } else if (lado1 == lado2 && lado1 != lado3 || lado2 == lado3){
        console.log("temos um triangulo isoceles")
    } else {
        console.log("temos um triangulo escaleno")
    }
}

qualTriangulo(1,2,2)
 */

// 5. Ler um número inteiro e exibir o seu sucessor.
/* function contarNumeSuce (numero){
    return numero + 1
}
console.log ("5) o número sucessor é " + contarNumeSuce(3)); */

// 6. Ler dois números inteiros e exibir o quociente e o resto da divisão inteira entre eles.
/* function quocienteEResto (num1, num2){
let quociente = num1/num2
let resto = num1 % num2
console.log("6) o quociente da divisão é " + quociente + " e o resto da divisão é " + resto)
}

quocienteEResto(3,2) */

// 7. Solicitar a idade de uma pessoa em dias e informar na tela a idade em anos, meses e dias.
/* function converterIdade (dias){
    let anos = (dias/365).toFixed(1);
    let meses = (dias/30).toFixed(1);
    return "7) sua idade é de " + anos + " anos ou " + meses + " meses ou " + dias + " dias. " ;
}

console.log(converterIdade(8340)); */

// 8. Dado que a fórmula para conversão de Fahrenheit para Celsius é JS = 5/9 (F – 32), leu um valor de temperatura em Fahrenheit e exibi-lo em Celsius.
/* function converterCelsius (F){
    let Celsius = (5/9*(F - 32)).toFixed(2);
    return "8) o valor em °C é " + Celsius;
}

console.log(converterCelsius(132)); */

// 11. Faça um algoritmo para calcular a nota semestral de um aluno. A nota semestral é obtida pela média aritmética entre a nota de 2 bimestres. Cada nota de bimestre é composta por 2 notas de provas.
/* function calcularMediaSemestral (n1, n2, n3, n4){
let bimestre1 = (n1 + n2)/2;
let bimestre2 = (n3 + n4)/2;
let notasemestral = (bimestre1 + bimestre2)/2
return "11) Sua nota semestral é " + notasemestral;
}
console.log(calcularMediaSemestral(2, 4, 8, 9)); */

// 12. Faça um algoritmo que transforme uma velocidade fornecida em m/s pelo usuário para Km/h. Para tal, multiplique o valor em m/s por 3,6.
/* function converterKmHora (ms){
    let Kmh = (ms * 3.6).toFixed(2);
    return "12) Velocidade é " + Kmh + " Km/h";  
}
console.log(converterKmHora(340.29)); */

/* 14. Em uma cidade se deseja sincronizar os semáforos. Com isto, quando um semáforo abre
(fica verde), os veículos que nele estavam parados tendem a encontrar os próximos semáforos
também abertos. Para que isto seja feito, os próximos semáforos precisam abrir um pouco
depois, dependendo da velocidade permitida na via e da distância entre eles. Assim, ao abrir o
semáforo, um veículo começa a acelerar até atingir a velocidade permitida, que mantém até
chegar ao próximo semáforo, levando um certo tempo para percorrer essa distância. Para que
encontre o próximo semáforo aberto, este deve abrir um pouco antes da chegada do veículo
(por ex: 3 segundos antes). Faça assim um algoritmo que informe quanto tempo depois um
semáforo deve abrir, dada as seguintes informações:
a. a distância desde o semáforo anterior (1 km)
b. a velocidade permitida da via (100 km/h)
c. a aceleração típica dos carros (0.0034 h 29412 km/h2)
S=So+Vot+at2/2 = 0,17 km
v = v0 +at v= 100 km/h */

/* // 15. Num dia de sol, você deseja medir a altura de um prédio, porém, a trena não é
// suficientemente longa. Assumindo que seja possível medir sua sombra e a do prédio no chão,
// e que você lembre da sua altura, faça um programa para ler os dados necessários e calcular a
// altura do prédio. */

// 16. Escreva um programa para gerar o invertido de um número com três algarismos (exemplo:
//     o invertido de 498 é 894).

// Usamos o número como string, para facilitar o exercício
/* let num = "498123456789";
let numInvertido = ""; */

// Estrutura "básica" do for
// for (let i = 0; i < num.length; i++) {}

// Nosso for, que itera pela string de forma invertida
/* for (let i = num.length - 1; i >= 0; i = i - 1) {
    numInvertido = numInvertido + num[i];
} */

// Hack do for "fácil"
/* for (let char of num) {
    console.log(char);
} */

/* console.log("16) o número invertido é " + numInvertido); */

/* // 17. Um programa para gerenciar os saques de um caixa eletrônico deve possuir algum
// mecânismo para decidir o número de notas de cada valor que deve ser disponibilizado para o
// cliente que realizou o saque. Um possível critério seria o da "distribuição ótima" no sentido de
// que as notas de menor valor fossem distribuídas em número mínimo possível. Por exemplo, se
// a quantia solicitada fosse R$ 87,00, o programa deveria indicar uma nota de R$ 50,00, três
// notas de R$ 10,00, uma nota de R$ 5,00 e duas notas de R$ 1,00. Escreva um programa que
// receba o valor da quantia solicitada e retorne a distribuição das notas de acordo com o critério
// da distribuição ótima (considere existir notas de R$1,00; R$2,00; R$5,00; R$10,00; R$20,00;
//* /* / R$50,00 e R$100,00). */
/* let notas = [100, 50, 20, 10, 5, 2, 1, ]

function saque(valor) {

    let totalNotas = 0;

    for (nota of notas) {

        let numeroDeNotasDesseValor = Math.floor(valor / nota);
        totalNotas += numeroDeNotasDesseValor;
        console.log("Devolve " + numeroDeNotasDesseValor + " notas de " + nota);
        valor = valor % nota;

    }

    console.log("Notas totais: " + totalNotas);

}

saque(253); */

/*  19. Escreva um programa que calcule a raiz de uma equação do primeiro grau. */

/* 20. Uma loja vende seus produtos no sistema entrada mais duas prestações, sendo a entrada
maior do que ou igual às duas prestações, as quais devem ser iguais, inteiras e as maiores
possíveis. Por exemplo, se o valor da mercadoria for R$ 270,00, a entrada e as duas
prestações são iguais a R$ 90,00; se o valor da mercadoria for R$ 302,75, a entrada é de R$
102,75 e as duas prestações são a iguais a R$ 100,00. Escreva um programa que receba o
valor da mercadoria e forneça o valor da entrada e das duas prestações, de acordo com as
regras acima. Observe que uma justificativa para a adoção desta regra é que ela facilita a
confecção e o consequente pagamento dos boletos das duas prestações. */
/* function geraBoleto(valor) {

    let resto = valor % 3;
    let parcelas = Math.trunc(valor / 3); 
    console.log("Entrada é R$ " + (parcelas + resto) + " e as parcelas são 2X de R$ " + parcelas);

}

geraBoleto(357.82); */

//23. Escreva um programa que receba um número e imprima se este número é ou não par.
/* function eParouImpar (a){
    if(a % 2 == 0){
        console.log("é par!")
    } else{
        console.log("é impar!")
    }
    
}
eParouImpar (34) */

/* let numeros = [9, 10 , 15, 13]

function eParouImpar (a){
    for(i=0; i<=a.length; i++){
        numeros = [i].length
    if(a % 2 == 0){
      console.log("24) é par!")
    } else{
        console.log("24) é impar!")
    }
}
}
eParouImpar (numeros) */

//24. Escreva um programa que receba três números e mostre o maior entre eles.
/* function exibirMaior (a,b,c){
    if (a > b && a > c){
        return a
    } else if (b > c && b > a){
        return b
    } else {
        return c
    }
} 
console.log(exibirMaior(10,5,4)) */

//25. Escreva um programa que receba o número equivalente ao mês e imprima a quantidade de
//dias deste mês.




//88. Escreva um programa em JS, que coloque a string lida toda em caixa alta.
/* let alunosQueEstaoEmPanico = ["gustavo f. brock", "janaina de souza pontes", "hebert santos", "gabriel francisco"]

function converterMaiusculas (array){
    for(i = 0; i < array.length; i++){
        array[i] = array[i].toUpperCase()
    }
    console.log("88) os alunos que estão em pânico são " + array);
}

converterMaiusculas(alunosQueEstaoEmPanico); */
//calculadora .js
// função adiconar
function calcAdd (x,y){
    return x + y;
}
console.log(calcAdd(10,10))

//calculadora .js
// função subtrair
function calcSub (x,y){
    return x - y;
}
console.log(calcSub(10,10))

//calculadora .js
// função multiplicar
function calcMulti (x,y){
    return x * y;
}
console.log(calcMulti(10,10));

//calculadora .js
// função multiplicar
function calcDiv (x,y){
    return x / y;
}
console.log(calcDiv(10,10));
console.log(calcDiv(10,00));
console.log(calcDiv(00,10));

//calculadora quadrado do número
function quadradoDoNumero (x){
    return x * x;
}
console.log(quadradoDoNumero(3));

//Media de 3 números
/*function mediaDeTresNumeros (x,y,z){
    return (x + y + z) / 3;
}
console.log(mediaDeTresNumeros (3,5,7));*/

//tentar ajustar
function mediaDeTresNumeros(num1,num2,num3){
    return calcDiv(calcAdd(calcAdd(num1,num2), num3), 3);
}
console.log(mediaDeTresNumeros(3,5,7))

/* ==========================
ATRIBUIÇÃO
========================== */

// O operador "=" serve para atribuir o valor 40 a uma variável chamada "idade"

let idade = 40

/* ==========================
ARITMÉTICOS
========================== */

// Nos permitem fazer operações matemáticas

10 + 15 //---> Soma
10 - 15 //---> Subtração
10 * 15 //---> Multiplicação
10 / 15 //---> Divisão
15++    //---> Incremento de um em um: 15 + 1
15--    //---> Decremento de um em um: 15 - 1
15 % 5  //---> Módulo. O resto obtido da divisão de 15 por 5: 0
15 % 2  //---> Módulo. O resto obtido da divisão de 15 por 2: 1

/* ==========================
COMPARAÇÃO SIMPLES
========================== */



/* ==========================
COMPARAÇÃO ESTRITA
========================== */


/* ==========================
OPERADORES RELACIONAIS
========================== */


/* ==========================
LÓGICOS
========================== */

// Permitem combinar valores booleanos e seu resultado ao mesmo tempo, também é um booleano

/*As regras são:

False, zero e strings vazias são todas equivalentes.
Null e undefined são equivalentes a si próprios e um ao outro, mas nada mais.
NaN não é equivalente a nada, incluindo outro NaN.
Infinity é truthy, mas não se pode comparar com verdadeiro ou falso.
Um array vazio é truthy, mas se o comparamos com true nos retorna false, e se o comparamos com false nos retorna true.*/


// Todos são verdadeiros
false == 0;
0 == '';
null == undefined;
[] == false;
!![0] == true;
 
// Todos são falsos.
false == null;
NaN == NaN;
Infinity == true;
[] == true;
[0] == true;


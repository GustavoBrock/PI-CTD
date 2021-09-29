/* Vamos fortalecer nosso conhecimento sobre arrays explorando diferentes ações. 
Veremos se eles se comportam como esperamos ou se ocorrem resultados inesperados.
Em primeiro lugar, vamos praticar as ações mais comuns e necessárias: */

/* 1.Acessar elementos específicos de um array.
const integrantesDoGrupo = ['Fabiana Yumi', 'Gustavo Felipe', 'Henrique Arantes', 'José Lucas', 'Maiara Porto']

console.log(integrantesDoGrupo[3]); */

/* 2.Modificar cada um dos elementos de um array e imprimi-los no console.
const integrantesDoGrupo = ['Fabiana Yumi', 'Gustavo Felipe', 'Henrique Arantes', 'José Lucas', 'Maiara Porto']

integrantesDoGrupo[0] = 'Fabiana Sato'
integrantesDoGrupo[1] = 'Gustavo Brock'
integrantesDoGrupo[2] = 'Henrique Nunes'
integrantesDoGrupo[3] = 'José Suares'
integrantesDoGrupo[4] = 'Maiara Martinelli'
console.log(integrantesDoGrupo); */

/* 3.Adicionar elementos a um array.
const integrantesDoGrupo = ['Fabiana Yumi', 'Gustavo Felipe', 'Henrique Arantes', 'José Lucas', 'Maiara Porto']

integrantesDoGrupo.push('Tati Teixeira')
integrantesDoGrupo.unshift('Lucas Feitosa')
console.log(integrantesDoGrupo); */

/* 4.Extrair elementos de um array.

const integrantesDoGrupo = ['Fabiana Yumi', 'Gustavo Felipe', 'Henrique Arantes', 'José Lucas', 'Maiara Porto', 'Tati Teixeira', 'Lucas Feitosa']
integrantesDoGrupo.pop('Tati Teixeira')
integrantesDoGrupo.shift('Lucas Feitosa')
console.log(integrantesDoGrupo); */

/* 5.Comparar elementos de um array com os elementos de outro.

const integrantesDoGrupo = ['Fabiana Yumi', 'Gustavo Felipe', 'Henrique Arantes', 'José Lucas', 'Maiara Porto']
const integrantesDh = ['Tati Teixeira', 'Lucas Feitosa']

console.log(integrantesDoGrupo.includes(integrantesDh[0, 1]))

integrantesDoGrupo.unshift('Lucas Feitosa')
console.log(integrantesDoGrupo[0] === integrantesDh[1]); */

/* ------------------------------------------------------------------------------------------------------------- */

/* Neste exercício, você terá que pensar sobre o que esses códigos retornam sem testá-lo no console. */

/* 1. undefined
let numbers =[22, 33, 54, 66, 72]
console.log(numbers[numbers.length]) */

/* 2. Spiderman
let grupoDeAmigos = [ ["Harry", "Ron", "Hermione"], ["Spiderman", "Hulk", "Ironman"], ["Penélope Glamour", "Pierre Nodoyuna","Patán"] ]
console.log(grupoDeAmigos[1][0]) */

/* 3. una string qualquer
let str = "una string qualquer"
let grupoDeAmigos = [ [45, 89, 0], ["Digital", "House", true], ["string", "123","false", 54, true, str] ]
console.log(grupoDeAmigos[2][grupoDeAmigos[2].length - 1]) */

/* -------------------------------------------------------------------------------------------------------------- */

/* Array Invertido
Neste exercício, você terá que criar uma função que retorne um array com seus elementos invertidos, sem modificá-lo.
Então, você deve fazer uma função que o modifique e inverta a ordem de seus elementos.*/

/* 1.Crie a função imprimirInverso que pega um Array como um argumento
e imprime cada elemento em ordem reversa no console (você não precisa inverter o Array).

var meuArray = [1, 2, 5, 7, 9, 4];
var meuArrayInvertido = meuArray.slice(0).reverse();
console.log(meuArray) */

/* 2.Crie a função inverter que recebe um Array como argumento e retorna um novo invertido.
function inverterArray (array){
    var arrayInvertido = array.slice(0).reverse();
    return "O array invertido é " + "[" + arrayInvertido + "]"
}
console.log(inverterArray([2, 7, 6, 5])) */

/* -------------------------------------------------------------------------------------------------------------- */

/* Coleções de Filmes (e mais…)
O tech leader da equipe precisa conhecer a estrutura de dados do novo projeto. Para isso, devemos:*/

/* /* 1.Criar a estrutura apropriada para armazenar os seguintes filmes e séries:

 "star wars", "matrix",  "mr. robot", "o preço do amanhã",  "a vida é bela". 

Importante: verifique se tudo funciona corretamente acessando qualquer um dos 
filmes uma vez que a estrutura correspondente tenha sido criada.

let filmes = ["star wars", "matrix",  "mr. robot", "o preço do amanhã",  "a vida é bela"]
console.log(filmes[2]) */

/* 2.Os filmes devem estar todos em letras maiúsculas. Para isso, crie uma função
que recebe um array por parâmetro e converta o conteúdo de cada elemento em letras maiúsculas.
Dica: revise o que faz o método de strings .toUpperCase().

let filmes = ["star wars", "matrix",  "mr. robot", "o preço do amanhã",  "a vida é bela"]

function converterPMaiusculas(array){
    array[0] = array[0].toUpperCase()
    array[1] = array[1].toUpperCase()
    array[2] = array[2].toUpperCase()
    array[3] = array[3].toUpperCase()
    array[4] = array[4].toUpperCase()
    return array
  }

  console.log(converterPMaiusculas(filmes)) */

/* 3.Crie outra estrutura semelhante à primeira, mas com os seguintes filmes de animação:
	"toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"
Em seguida, crie uma função que receba dois arrays como parâmetros, para poder adicionar 
os elementos contidos no segundo array, dentro do primeiro, a fim de retornar um único array
 com todos os filmes como seus elementos.*/

 let filmes = ["star wars", "matrix",  "mr. robot", "o preço do amanhã",  "a vida é bela"]
 let animacoes = ["toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"]
 function combinararrays(array1, array2) { 
    array1.join(array2)
     }
   console.log(combinararrays(filmes, animacoes))

/* 4.Durante o processo, percebemos que o último elemento na série de filmes animados é, na verdade, um game. Agora devemos editar nosso código e modificá-lo para que possamos remover o último elemento antes de migrar o conteúdo para o array que contém todos os filmes.
PS: por precaução, salve o elemento que você vai deletar em uma variável.*/

/* 5.Finalmente, recebemos dois arrays com classificações feitas por diferentes usuários do mundo nos filmes com o seguinte formato:
	const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
	const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];
Crie uma função que compare as notas e nos diga se elas são iguais ou diferentes.
 */

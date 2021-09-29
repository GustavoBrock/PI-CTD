// strings: são cadeias de texto
// string: para o js a string é um objeto

//.length -> proporiedade que conta o tamanho da cadeia de strings
/*let texto = "Oi eu sou o Gustavo"
console.log(texto.length);

// .indexOf() -> prorpiedade que busca por um elemento apontado e retorna sua posição
console.log(texto.indexOf("s"))
console.log(texto.indexOf("1"))

//.slice -> propriedade que busca por um elemento ou mais quando é indicada sua posição e retorna esse elemento
console.log(texto.slice(0,3))

//.trim() -> prorpriedade remove os espaços em branco antes de depois do inicio e fim
console.log(texto.trim())

//.split() -> separa os dados a aprtir de um determinado caractere e os transforma em uma array
console.log(texto.split(" "))

//.replace() -> troca o segmento de um texto por outro definido
console.log(texto.replace("Gustavo" , "Brock"))

//array: Nos permitem criar um conjunto de dados ordenados
// os arrays podem ser utilizados para armazenar qualquer tipo de dados, eles são iniciados  por [] e os itens separados por ,
// let meuArray = ['Star Wars', true, 23];

let filmesFavoritos = ['Star Wars', 'LOTR', 'Pokemon 2000'];

console.log(filmesFavoritos[2]);*/

//Métodos de Arrays
//.push(): Adiciona um ou mais elementos ao final do array 

/*let cores = ["Azul", "Amarelo", "Vermelho"]
cores.push("Violeta")
console.log(cores);*/

//.pop(): Elimina o ultimo elemento de um array
/*let cores = ["Azul", "Amarelo", "Vermelho"]
let ultimaCor = cores.pop()
console.log(cores);
console.log(ultimaCor);*/

//.shift(): Elimina o primeiro elemento de um array
/*let cores = ["Azul", "Amarelo", "Vermelho"]
let primeiraCor = cores.shift()
console.log(cores);
console.log(primeiraCor);*/

//.unshift(): Adiciona um ou mais elementos ao inicio de um array
/*let cores = ["Azul", "Amarelo", "Vermelho"]
cores.unshift("Violeta")
console.log(cores);*/

//.join: Junta os elementos de um array usando um separador que especificamos. Se não especificar, use virgulas.
/*let cores = ["Azul", "Amarelo", "Vermelho"]
let separadosPorVirgula = cores.join();
console.log(separadosPorVirgula);

let separadosPor$ = cores.join("$");
console.log(separadosPor$);*/

//.lastIndexOf(): Similar ao indexOf(), exceto que ele começa procurando pelo elemento no final do array (de trás para frente)
let cores = ["Azul", "Amarelo", "Vermelho"]
console.log(cores.lastIndexOf("Preto"))

//.incluedes: Similar ao indexOf() mas retorna um booleano;
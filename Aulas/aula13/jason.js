/* Exemplo de objetos literais -> Pais

let pais = {
    nome: "Brasil",
    capital: "Brasilia",
    populacao: "210 Milhões",
    dizerNacionalidade: function (){
        return "Nasci em/no " + this.nome;
    }
} ;

console.log(pais.dizerNacionalidade()); */

/* Exemplo de função construtora -> Carro

let carro = {
    marca: "Fiat",
    modelo: "Uno",
};

function Carro(valorMarca, valorModelo) {
    this.marca = valorMarca;
    this.modelo = valorModelo;
}

console.log(carro);

console.log(new Carro ("Renault", "Logan")); */

//jason

/* let pessoa = {
nome: "Gustavo",
idade: 22,
altura: 1.80,
};

let json = JSON.stringify(pessoa)
console.log(json); */

let listaCompras = ["pão", "presunto", "queijo"]

let json = JSON.stringify(listaCompras);

let arrayDeNovo = JSON.parse(json)
console.log(arrayDeNovo);
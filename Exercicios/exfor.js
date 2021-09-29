/* let peliculas = ["star wars", "totoro", "rocky", "pulp fiction", "la vida es bella"];
let animacoes = ["toy story", "vida de inseto", "enrolados", "procurando nemo", "a fuga das galinhas"];

//1) atividade 1
 function convertirAMayusculas(array){
    array[0] = array[0].toUpperCase()
    array[1] = array[1].toUpperCase()
    array[2] = array[2].toUpperCase()
    array[3] = array[3].toUpperCase()
    array[4] = array[4].toUpperCase()
    return array
  }

function convertirAMayusculas(array){
for(let i = 0; i< array.length; i++){
   array[i] = array[i].toUpperCase()
}

console.log(array)

}

convertirAMayusculas(peliculas) */

//2) atividade 2
/* function pasajeDeElementos(array1, array2) { 
    array1.push(array2.pop().  toUpperCase()) 
    array1.push(array2.pop(). toUpperCase()) 
    array1.push(array2.pop(). toUpperCase()) 
    array1.push(array2.pop(). toUpperCase()) 
    array1.push(array2.pop(). toUpperCase()) 
   }

function concatenarArrays(array1,array2){
    for(let i = 0; i < array2.length;i++){
        array1.push(array2[i]);
    }
    console.log(array1);
}


concatenarArrays(peliculas, animacoes) */

//4 FUNÇÃO DE COMPARARÇÃO 
/* const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];

function compararClassificacoes(asia, europa) {
    let compararAeE = [];
    if (asia.length === europa.length) {
        for (let i = 0; i < asia.length; i++){
            compararAeE[i] = asia[i] === europa[i];
        }
    }
console.log (compararAeE);
}

compararClassificacoes(asiaScores, euroScores) */

//bonus
const participanteA = [5, 8, 4, 9, 5]
const participanteB = [8, 7, 8, 6, 8]
const participanteC = [7, 5, 10, 8, 3]

function calcularMedia(a, b, c){
    let totalA = 0;
    for(let i = 0; i<a.length; i++){
        totalA += a[i]
    }
let mediaA = totalA / a.length;
console.log("A média do participante A é " + mediaA)

let totalB = 0
    for(let i = 0; i<b.length; i++){
        totalB += b[i]
    }
let mediaB = totalB / b.length;
console.log("A média do participante B é " + mediaB)

let totalC = 0
    for(let i = 0; i<c.length; i++){
        totalC += c[i]
    }
let mediaC = totalC / c.length;
console.log("A média do participante C é " + mediaC)

if (mediaA > mediaB && mediaA > mediaC){
    console.log("O participante A tem a maior média ")
}

else if (mediaB > mediaA && mediaB > mediaC){
    console.log("O participante B tem a maior média ")
}

else {
    console.log("O participante C tem a maior média")
}
}

calcularMedia(participanteA,participanteB,participanteC)

// maior nota

function pontuacaoMaior(a, b, c){
    let aMaior = 0;
    let bMaior = 0;
    let cMaior = 0;
    for(let i = 0; i<a.length; i++){
    if(aMaior < a[i]){
        aMaior = a[i]
    }
}
    for(let i = 0; i<b.length; i++){
        if(bMaior < b[i]){
            bMaior = b[i]
        }
    }
    for(let i = 0; i<c.length; i++){
        if(cMaior < c[i]){
           cMaior = c[i]
    }
    }
    if (aMaior > bMaior && aMaior > cMaior){
        console.log("A maior pontuação é do participante A")
    }
    else if( bMaior > aMaior && bMaior > cMaior){
        console.log("A maior pontuação é do participante B")
    }
    else {
        console.log("A maior pontuação é do participante C")
    }
    // console.log(aMaior, bMaior, cMaior)
}
pontuacaoMaior(participanteA,participanteB,participanteC)




/* let totalA = 0;
    for(let i = 0; i<participanteA.length; i++){
        totalA += participanteA[i]
    }
let mediaA = totalA / participanteA.length;
console.log("A média do participante A é " + mediaA)

let totalB = 0
    for(let i = 0; i<participanteB.length; i++){
        totalB += participanteB[i]
    }
let mediaB = totalB / participanteB.length;
console.log("A média do participante B é " + mediaB)

let totalC = 0
    for(let i = 0; i<participanteC.length; i++){
        totalC += participanteC[i]
    }
let mediaC = totalC / participanteC.length;
console.log("A média do participante C é " + mediaC)

if (mediaA > mediaB && mediaA > mediaC){
    console.log("O participante A tem a maior média ")
}

else if (mediaB > mediaA && mediaB > mediaC){
    console.log("O participante B tem a maior média ")
}

else {
    console.log("O participante C tem a maior média")
}

 */

/* 4.	Logo nosso líder tecnológico nos pede para criar essas duas funções
 geramos uma nova funcionalidade chamada competição que receberá os 3 
 participantes por parâmetros, e executará as duas funções criadas 
 anteriormente para calcular as médias e pontuações mais altas de cada 
 uma, e deve anunciar (mostrar pelo console) o vencedor de cada modalidade de pontuação. */


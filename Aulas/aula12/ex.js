
const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5]; 

function compararCalificaciones(asia, europa) {
  let comparacionesAsiaEuropa = []
  comparacionesAsiaEuropa[0] = asia[0] === europa[0]
  comparacionesAsiaEuropa[1] = asia[1] === europa[1]
  comparacionesAsiaEuropa[2] = asia[2] === europa[2]
  comparacionesAsiaEuropa[3] = asia[3] === europa[3]
}

function comparacaoEntreArrays(asia,europa){
  let comparacoes = [];
  if(asia.length === europa.length){
    for(let i = 0;i<asia.length;i++){
      comparacoes[i] = asia[i] === europa[i];
    }
  }
  console.log(comparacoes);
}

comparacaoEntreArrays(asiaScores,euroScores);


const alicia = [23, 69, 32];
 const bob = [12, 67, 43];
 
 function encontrarGanhador(a, b) {
    let pontosA = 0;
    let pontosB = 0;
    for(let i = 0; i< a.length; i++){
        if(a[i] > b[i]) {
        pontosA++;
    } else if(a[i] == b[i]) {
        pontosA = pontosB + 0;
        pontosB = pontosA + 0;
    } else if(a[i] < b[i]) {
        pontosB++;
    }
    }
}
let vencedor = ""
if(pontosA > pontosB){
    vencedor = "Primeiro participante"
    console.log(`O vencedor é ${vencedor}!`);
}
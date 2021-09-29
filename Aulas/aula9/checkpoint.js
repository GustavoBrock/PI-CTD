/* Grupo 6
Adilane Pereira
Gustavo F. Brock
Iago Mendes
Janaína de Souza Pontes
Maiara Martinelli
Saulo dos Santos Nascimento*/

/* let pipoca = 10;
let macarrão = 8;
let carne = 15;
let feijão = 12;
let brigadeiro = 8; */

function microondas (alimento, tempo,){
let padrão;
if (alimento == "pipoca"){
    padrão = 10;
} else if (alimento == "macarrão" || alimento == "brigadeiro"){
    padrão = 8;
} else if (alimento == "carne"){
    padrão = 15;
} else if (alimento == "feijão"){
    padrão = 12;
} else {
    console.log("Prato inexistente ")
}

if (tempo > 3 * padrão){
    console.log ("Kabummm!!! ")
} else if (tempo > 2 * padrão){
    console.log("A comida Queimou ")
} else if( tempo < padrão){
    console.log("Tempo de preparo insuficiente ")
} else if( tempo > padrão && tempo <= 2 * padrão){
    console.log("Prato pronto, bom apetite!!!")
}

}

microondas("arroz", 100);
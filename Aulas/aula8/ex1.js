function podeSubir (altura, acompanhado){
    let podeSubir = false;

    if(altura <= 2.0 &&  altura >= 1.4){
        podeSubir = true;
    }

/*    else if(altura < 1.4 && acompanhado){
    podeSubir = true;
}

    else if(altura < 1.2 && acompanhado){
    podeSubir=false;
} */
    return podeSubir
}


console.log(podeSubir(1.38, false));

/* function podeSubir (altura, acompanhado){

    if(altura <= 2.0 &&  altura >= 1.4){
        return "Acesso permitido";
    }

    else if(altura < 1.4 && acompanhado){
        return "Acesso permitido";
}

   else if(altura < 1.2){
        return "Acesso negado";
}
return "Acesso negado";
}
    console.log(podeSubir(1.38, true)); */
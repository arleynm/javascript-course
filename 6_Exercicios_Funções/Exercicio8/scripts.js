function tamanhoTexto(texto){
    if(texto.length >10){
        console.log("Texto muito longo");
    }else{
        console.log("Texto dentro do limite");
    }
    console.log(texto.length)
}

tamanhoTexto("Teste");
tamanhoTexto("Como esta funcionado o texto");
tamanhoTexto("10-");
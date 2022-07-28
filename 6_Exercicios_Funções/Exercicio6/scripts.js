function validacao(variavel){
    if( typeof variavel === Number){
        console.log("numero");
    }else if ( typeof variavel === String){
        console.log("String");
    }else if ( typeof variavel === Boolean){
        console.log("Bollean");
    }
}

validacao(false);
validacao(23);
validacao("Arley");
function carteira(idade){
    if(idade >= 18){
        console.log("Pode participar da auto-escola");
    }
    else{
        console.log("Não pode participar da auto-escola");
    }

    return idade;
}

carteira(10);
carteira(20);
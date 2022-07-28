let idade = 22;
let cnh = true;

if(idade >= 18 && cnh == false){
    console.log("Não pode dirigir por nao ter cnh");
}else if(idade >= 18 && cnh==true){
    console.log("Pode dirigir");
}else{
    console.log("Não pode dirigir por nao ter idade suficiente e cnh");
}
function recursao(n){

    if(n -1 == 2){
        console.log("Recursão parou ");
    }else if(n%2 !=0){
        console.log("numero impar" +n);
        recursao(n-1);
    }else{
        console.log("Numero par" +n);
        recursao(n-2);
    }
}

recrusao(21);
recursao(23);
recursao(45);
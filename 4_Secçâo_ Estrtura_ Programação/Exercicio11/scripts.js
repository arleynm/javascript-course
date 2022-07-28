let num = 41;
let divisoes = 0;

for(i=0; i <= num; i++){
    if(num % i == 0){
        divisoes++;
    }
}

if(divisoes == 2){
    console.log("O numero é primo");
}else{
    console.log("o numero não é primo");
}

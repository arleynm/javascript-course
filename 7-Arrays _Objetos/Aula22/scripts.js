let num = 1;
let num1 = 4;
let num2 = 17;
let num3 = 34;
let num4 = 78;

function imprimiNumeros(...args){
    for(let i = 0 ; i < args.length; i++){
        console.log(args[i]);
    }
}

imprimirNumeros(num,num1,num2,num3,num4);
console.log("pause");
imprimiNumeros(num2,num3);
imprimiNumeros(2,3,7,8,4,6,8,2,4,6,6);
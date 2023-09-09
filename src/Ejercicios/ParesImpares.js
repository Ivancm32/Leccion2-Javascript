let valor = parseInt(prompt("Ingrese la cantidad de numeros a ingresar"));
let numero = 0;
let cantPares = 0;
let cantImpares = 0;
for(let i = 0 ; i < valor ; i++){
    numero = parseInt(prompt("Ingrese un numero"));
    if(numero%2==0){
        cantPares += 1;
        document.write(`<br/> ${numero} es un numero par`);
    }
    else{
        cantImpares += 1;
        document.write(`<br/> ${numero} es un numero Impar`);
    }
}

    document.write(`<br/>la cantidad de numeros pares son :  ${cantPares}`);

    document.write(`<br/> y la cantidad de numeros Impares son : ${cantImpares}`);
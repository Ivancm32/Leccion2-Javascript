

let valor = parseInt(prompt("Ingrese un numero"));

let tipo =  valor % 2 ;

if(tipo == 0){
    document.write(`El numero ` + valor +  ` que usted ingreso es un numero par`);
}
else{
    document.write(`El numero ` + valor +  ` que usted ingreso es un numero impar`);
}
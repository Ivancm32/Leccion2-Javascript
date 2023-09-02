//Realice un programa que dado un número de 3 cifras se invierta el número y se imprima en pantalla el resultado.

let valor_ingresado = (prompt("Ingrese un valor de 3 cifras"));
if(valor_ingresado.length == 3  ){


let lista =Array.from(valor_ingresado).join('');
let lista2 = new Array(0);
for(let valor = lista.length-1 ; valor >= 0 ; valor --)
{
    lista2.push(lista[valor]);
}
let valor_invertido = lista2.toString();

document.write(`El valor de invertido de ` + valor_ingresado + `  es: ${(valor_invertido.replace(',','').replace(',',''))}`);
}
else{
document.write(`Usted ingreso una cantidad de digitos diferente a 3`);
}
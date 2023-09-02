/*Realice un programa que pida al usuario la cantidad de
NOTAS
que va a ingresar, las ingrese y calcule su PROMEDIO . Si el
PROMEDIO es mayor 2.99 imprima que el estudiante APROBÓ y
sino que el estudiante REPROBÓ.*/
let lista = new Array(0);
let suma = 0;
let CantNotas = parseInt(prompt("Ingrese la cantidad de notas"));
for(let valor = 0 ; valor < CantNotas ; valor++ ){
    let val = parseFloat(prompt("Ingrese la " + (valor +1) + "nota"))
    lista.push(val);
}
lista.forEach((list) => {
    suma += list;
});

if((suma / lista.length ) > 2.99){
    document.write(`El estudiante Aprobo`);
}
else{
    document.write(`El estudiante Reprobo`);
}

  


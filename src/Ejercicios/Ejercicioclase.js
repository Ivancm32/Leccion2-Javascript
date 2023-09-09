let valor1 = parseInt(prompt("Ingrese un valor"));
let valor2 = parseInt(prompt("Ingrese un valor mayor al anterior"));

if( valor1 > valor2 ){
    document.write(`ERROR!!!, el numero ${valor2} no es mayor a ${valor1}  `);
}
else{
    document.write(`Correcto, el numero ${valor2} es mayor a ${valor1}  `);
}

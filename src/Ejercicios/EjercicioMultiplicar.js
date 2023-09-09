let Numero = parseInt(prompt("Ingrese el numero de la tabla de multiplicar que quieres ver"));
document.write(`la tabla de multiplicar del ${Numero} es la siguiente : `);
for(let i = 10 ; i >= 1 ; i--){
    document.write(`<br/>${Numero} x ${i} = ${Numero*i} `);

}
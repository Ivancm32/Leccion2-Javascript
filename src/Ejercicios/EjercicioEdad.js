let edad = parseInt(prompt("Ingrese su edad"));

if(edad > 18){
    document.write(`Puedes ingresar al lugar privado`);
}
else if(edad >= 16){
    document.write(`Puedes ingresar a la fiesta de adolecentes`);
}
else{
    document.write(`No puedes ingresar a la fiesta`);
}
/*1. Realice un programa que permita calcular el número de pulsaciones que debe tener una
persona por cada 10 segundos de ejercicio aeróbico; la fórmula que se aplica cuando el sexo
es femenino es:
• Núm. pulsaciones = (220 - edad) / 10
Y si el sexo es masculino:
• Núm. pulsaciones = (210 - edad) / 10*/

let valor_sexo = (prompt("Ingrese el sexo con M (de Masculino) o F (Femenino) para calcular la cantidad de pulsaciones por edad"));
let valor_edad = (prompt("Ingrese la edad"));
let Npulsaciones = 0;
if(valor_sexo == "M" || valor_sexo == "m"){

    Npulsaciones = (210 - valor_edad) / 10 ;

}

else if (valor_sexo == "F" || valor_sexo == "f") {

    Npulsaciones = (220 - valor_edad) / 10 ;
}

else {
    document.write(`Usted ingreso otro dato`);
}

document.write(`la cantidad de pulsaciones es: ${Npulsaciones}`);

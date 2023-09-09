Practica = {
    Ejercicio1: function() {

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

    },

    Ejercicio2: function() {
/* Un estudiante de la universidad tiene unos ingresos I y unos gastos G, desea saber si sus 
ingresos del mes alcanzan para pagar todos sus gastos y la cantidad que le sobra o falta.
*/

let I = (prompt("Ingrese el monto de sus Ingresos"));
let G = (prompt("Ingrese el monto de sus Gastos"));
if(I >= G){
    document.write(`El monto de Ingresos : ${I} si le alcanza para pagar sus gastos y le sobra : ${I - G}`);    
}
else {
    document.write(`El monto de Ingresos : ${I} no le alcanza para pagar sus gastos y le faltan : ${-1 *(I - G)}`);   
}
    },


    Ejercicio3: function() {
/*  Un empleado trabajar 40 horas semanales en una empresa y recibe un salario de 260.000 
pesos semanales. Si excede de las 40 horas la empresa debe pagar un recargo del 30% por 
hora extra trabajada. Dadas las horas semanales trabajadas de un empleado, determinar el 
salario a pagar.*/
const SalarioSemanal = parseInt(260000);
const horasSemanales = parseInt(40);
let horalab = SalarioSemanal / horasSemanales ;
let recargo = horalab * 1.30 ;
let horas = parseFloat(prompt("Ingrese las horas trabajadas"));
if(horas > horasSemanales){
    document.write(`El monto a pagar es de : ${((horas-horasSemanales)*recargo) + SalarioSemanal} por la cantidad de ${horas} horas trabajadas`);    
}
else {
    document.write(`El monto a pagar es de : ${horas * horalab} por la cantidad de ${horas} horas trabajadas`);   
}
    },


    Ejercicio4: function() {
/*Ahora realice el programa anterior para que el usuario ingrese:
• El tipo de salario: Diario/Semanal/Mensual (1/2/3).
• Salario (Cantidad en $).
• La cantidad a partir de la cual se consideran Horas Extras Laborales.
• El recargo (%) de las Horas Extras Laborales.
• Horas trabajadas.
• Salario a pagar (menos deducciones).
• Deducciones: 
i. Aportes a salud: $12.5%;
ii. Aportes a pensión: 16%;
iii. Retención en la fuente: 4%;
iv. ICA: 1%;
v. ARL: 1%; */
let tipoSalario = parseInt(prompt("Ingrese la forma de pago del salario, si es Diario ingrese 1, si es Semanal ingrese 2 y si es Mensual ingrese 3"));
let Salario = parseFloat(prompt("Ingrese su salario"));
let Hora_Apartir_Extra = parseFloat(prompt("Ingrese la hora a partir de la cual se consideran Horas Extras Laborales"));
let porcentajeRecargo = parseFloat(prompt("Ingrese el porcentaje de recargo por hora extra"));
let horas = parseFloat(prompt("Ingrese las horas trabajadas"));
let horalab = Salario / Hora_Apartir_Extra ;
let recargo = horalab * (porcentajeRecargo) ;

if(horas > Hora_Apartir_Extra){
   
    
    if(tipoSalario == 1){


        document.write(`Su desgloce de monto a pagar por la cantidad de ${horas} horas trabajadas es de : <br/> Monto Bruto  ${(((horas-Hora_Apartir_Extra)*recargo) + Salario)} <br/> Desgloce de Deducciones : <br/> Aportes a salud :  ${(((((horas-Hora_Apartir_Extra)*recargo) + Salario)*12.5)/100)} <br/> Aportes a pensión :  ${(((((horas-Hora_Apartir_Extra)*recargo) + Salario)*16)/100)} <br/> Retención en la fuente :  ${(((((horas-Hora_Apartir_Extra)*recargo) + Salario)*4)/100)}  <br/> ICA :  ${(((((horas-Hora_Apartir_Extra)*recargo) + Salario)*1)/100)} <br/> ARL :  ${(((((horas-Hora_Apartir_Extra)*recargo) + Salario)*1)/100)} <br/> Monto Neto :  ${(((horas-Hora_Apartir_Extra)*recargo) + Salario) - (((((horas-Hora_Apartir_Extra)*recargo) + Salario)*12.5)/100) - (((((horas-Hora_Apartir_Extra)*recargo) + Salario)*16)/100) - (((((horas-Hora_Apartir_Extra)*recargo) + Salario)*4)/100) - (((((horas-Hora_Apartir_Extra)*recargo) + Salario)*1)/100)  - (((((horas-Hora_Apartir_Extra)*recargo) + Salario)*1)/100)}  `);  
    }

    else if(tipoSalario == 2){
        document.write(`Su desgloce de monto a pagar por la cantidad de ${horas} horas trabajadas es de : <br/> Monto Bruto  ${(((horas-Hora_Apartir_Extra)*recargo) + Salario)} <br/> Desgloce de Deducciones : <br/> Aportes a salud :  ${(((((horas-Hora_Apartir_Extra)*recargo) + Salario)*12.5)/100)} <br/> Aportes a pensión :  ${(((((horas-Hora_Apartir_Extra)*recargo) + Salario)*16)/100)} <br/> Retención en la fuente :  ${(((((horas-Hora_Apartir_Extra)*recargo) + Salario)*4)/100)}  <br/> ICA :  ${(((((horas-Hora_Apartir_Extra)*recargo) + Salario)*1)/100)} <br/> ARL :  ${(((((horas-Hora_Apartir_Extra)*recargo) + Salario)*1)/100)} <br/> Monto Neto :  ${(((horas-Hora_Apartir_Extra)*recargo) + Salario) - (((((horas-Hora_Apartir_Extra)*recargo) + Salario)*12.5)/100) - (((((horas-Hora_Apartir_Extra)*recargo) + Salario)*16)/100) - (((((horas-Hora_Apartir_Extra)*recargo) + Salario)*4)/100) - (((((horas-Hora_Apartir_Extra)*recargo) + Salario)*1)/100)  - (((((horas-Hora_Apartir_Extra)*recargo) + Salario)*1)/100)}  `);  
  
    }
    else{

        document.write(`Su desgloce de monto a pagar por la cantidad de ${horas} horas trabajadas es de : <br/> Monto Bruto  ${(((horas-Hora_Apartir_Extra)*recargo) + Salario)} <br/> Desgloce de Deducciones : <br/> Aportes a salud :  ${(((((horas-Hora_Apartir_Extra)*recargo) + Salario)*12.5)/100)} <br/> Aportes a pensión :  ${(((((horas-Hora_Apartir_Extra)*recargo) + Salario)*16)/100)} <br/> Retención en la fuente :  ${(((((horas-Hora_Apartir_Extra)*recargo) + Salario)*4)/100)}  <br/> ICA :  ${(((((horas-Hora_Apartir_Extra)*recargo) + Salario)*1)/100)} <br/> ARL :  ${(((((horas-Hora_Apartir_Extra)*recargo) + Salario)*1)/100)} <br/> Monto Neto :  ${(((horas-Hora_Apartir_Extra)*recargo) + Salario) - (((((horas-Hora_Apartir_Extra)*recargo) + Salario)*12.5)/100) - (((((horas-Hora_Apartir_Extra)*recargo) + Salario)*16)/100) - (((((horas-Hora_Apartir_Extra)*recargo) + Salario)*4)/100) - (((((horas-Hora_Apartir_Extra)*recargo) + Salario)*1)/100)  - (((((horas-Hora_Apartir_Extra)*recargo) + Salario)*1)/100)}  `);  
  
    }
   
}
else {
    document.write(`Su desgloce de monto a pagar por la cantidad de ${horas} horas trabajadas es de : <br/> Monto Bruto  ${(horas * horalab)} <br/> Desgloce de Deducciones : <br/> Aportes a salud :  ${(((horas * horalab)*12.5)/100)} <br/> Aportes a pensión :  ${(((horas * horalab)*16)/100)} <br/> Retención en la fuente :  ${(((horas * horalab)*4)/100)}  <br/> ICA :  ${(((horas * horalab)*1)/100)} <br/> ARL :  ${(((horas * horalab)*1)/100)} <br/> Monto Neto :  ${(horas * horalab) - (((horas * horalab)*12.5)/100) - (((horas * horalab)*16)/100) - (((horas * horalab)*4)/100) - (((horas * horalab)*1)/100)  - (((horas * horalab)*1)/100)}  `);  
  
   
}


    },

    Ejercicio5: function() {
/*Suponga que las tarifas de una compañía de gas se basan en el consumo de acuerdo con 
la siguiente información: los primeros 70 metros cúbicos de gas usado tiene un costo de 500 
pesos, los siguientes 100 metros cúbicos de gas usado 250 pesos por metro cúbico, los 
siguientes 230 metros cúbicos de gas usado 125 pesos por metro cúbico, por encima de 400 
metros cúbicos de gas usado 55 pesos por metro cúbico. Dada la lectura anterior y actual 
de gas en metros cúbicos podrá acceder a un descuento. Tendrá un descuento del 20% si 
la lectura actual es menor a la lectura anterior y tendrá un descuento del 50% si la lectura 
actual es menor al 50% del consumo total de la lectura anterior.

70m   500
100m  250
230m  125
400m  55

descuento
20%  lectura < lectura anterior
50%  lectura < 50% del consumo de la lectura anterior

 */
    },

    Ejercicio6: function() {
/* Un cliente llega a una venta de empanadas y pide una cantidad X, sabiendo que cada 
empanada cuesta $ Y, cuanto debe pagar el cliente por su pedido si:
• Si el cliente compra más de 300 empanadas, se le dará un descuento del 30%
• Si compra más de 200 y menos de 300, se le dará un descuento del 20%
• Si compra entre de 100 y 200, se le dará un descuento del 10%
• Si compra más de 50 y menos de 100, se le dará un descuento del 5%
• Entre 1 y 50 no tiene descuento.
*/
    },

    Ejercicio7: function() {
/* En un cajero automático se necesita determinar el menor número mínimo de billetes de 
10.000, 5.000, 2.000, 1.000, y mínimo de monedas de 500, 200 y 100 necesarios para pagar 
una cantidad X dada por teclado. (pista: Recuerden el ejercicio de invertir un numero de 3 
cifras)*/
    },

    Ejercicio8: function() {
/*En una piñata se van a entregar regalos de la siguiente manera: a las niñas menores de 6 
años se les va a dar un coche, entre 6 y 9 un peluche y a las demás una muñeca; a los niños 
menores de 5 se les va a dar un carrito entre 5 y 8 un disfraz de hombre araña y a los demás 
una bicicleta, Dados el sexo y la edad del niño determinar que regalo le corresponde. */
    },

    Ejercicio9: function() {
/* Dado el salario de un trabajador imprimir el salario a pagar sabiendo que el salario es mayor 
de un salario mínimo pero menor que dos, cobrar el 15% de retención en la fuente, si es 
igual o superior a dos salarios mínimos, cobrar un 28% de retención, en caso de ganar 
menos de un salario mínimo dar un subsidio del 30%.*/
    },

    Ejercicio10: function() {
/*  Desplegar un menú con las opciones que le permita calcular el área de: Cuadrado, Círculo, 
Triángulo, Rectángulo. Para lograr lo anterior debe aplicar las fórmulas matemáticas 
correspondientes para cada figura*/
    },

    Ejercicio11: function() {
        /*Tomando como base los resultados obtenidos en un laboratorio de análisis clínicos, realice
un programa que le permita a un médico determinar si una persona tiene anemia o no, lo
cual depende de su nivel de hemoglobina en la sangre, de su edad y de su sexo. Si el nivel
de hemoglobina que tiene una persona es menor que el rango que le corresponde, se
determina su resultado como positivo y en caso contrario como negativo. La tabla en la que
el medico se basa para obtener el resultado es la siguient*/

/*
Edad                  Nivel
0-1                   13 - 26 g%
> 1 y <= 6 mesess     10 - 18 g%     
> 6 y <= 12 meses       11 - 15 g%
> 1 y <= 5 años       11,5 - 15 g%
> 5 y <= 10 años     12,6 - 15.5 g%
> 10 y <= 15 años     13 - 15.5 g%
mujeres > 15 años     12 - 16 g%
hombres > 15 años     14 - 18 g%
*/

let nivelEglo = 0.0;
let valor_sexo = (prompt("Ingrese el sexo con M (de Masculino) o F (Femenino)"));
let mayor = (prompt(" Si el paciente es mayor de 1 año ingrese 1 sino ingrese 0"));
if (mayor == 1){
    let edad = (prompt(" Ingrese los años del paciente"));
if(edad > 1 && edad <= 5){
    nivelEglo = parseFloat(prompt("Ingrese el valor de la hemoglobina"));
    if (nivelEglo >= 11.5){
        document.write(`El paciente esta negativo`);
    }    
    else{
        document.write(`El paciente esta positivo`);
    }
}
else if(edad > 5 && edad <= 10){
    nivelEglo = parseFloat(prompt("Ingrese el valor de la hemoglobina"));
    if (nivelEglo >= 12.6){
        document.write(`El paciente esta negativo`);
    }    
    else{
        document.write(`El paciente esta positivo`);
    }
}
else if(edad > 10 && edad <= 15){
    nivelEglo = parseFloat(prompt("Ingrese el valor de la hemoglobina"));
    if (nivelEglo >= 13){
        document.write(`El paciente esta negativo`);
    }    
    else{
        document.write(`El paciente esta positivo`);
    }
}
else{
    if(valor_sexo == "M" || valor_sexo == "m"){

        nivelEglo = parseFloat(prompt("Ingrese el valor de la hemoglobina"));
        if (nivelEglo >= 14){
            document.write(`El paciente esta negativo`);
        }    
        else{
            document.write(`El paciente esta positivo`);
        }
    }
    
    else if (valor_sexo == "F" || valor_sexo == "f") {
    
        nivelEglo = parseFloat(prompt("Ingrese el valor de la hemoglobina"));
        if (nivelEglo >= 12){
            document.write(`El paciente esta negativo`);
        }    
        else{
            document.write(`El paciente esta positivo`);
        }
    }
}

}

else {
    let edad = (prompt(" Ingrese los meses del paciente"));
if(edad >= 0 && edad <= 1){
    nivelEglo = parseFloat(prompt("Ingrese el valor de la hemoglobina"));
    if (nivelEglo >= 13){
        document.write(`El paciente esta negativo`);
    }    
    else{
        document.write(`El paciente esta positivo`);
    }
}
else if(edad > 1 && edad <= 6){
    nivelEglo = parseFloat(prompt("Ingrese el valor de la hemoglobina"));
    if (nivelEglo >= 10){
        document.write(`El paciente esta negativo`);
    }    
    else{
        document.write(`El paciente esta positivo`);
    }
}
else{
    nivelEglo = parseFloat(prompt("Ingrese el valor de la hemoglobina"));
    if (nivelEglo >= 11){
        document.write(`El paciente esta negativo`);
    }    
    else{
        document.write(`El paciente esta positivo`);
    }
}
    
}
    },

    Ejercicio12: function() {
/* Una fábrica de computadoras planea ofrecer a los clientes un descuento que dependerá del 
número de computadoras que compre. Si las computadoras son menos de cinco se les dará 
un 10% de descuento sobre el total de la compra; si el número de computadoras es mayor 
o igual a cinco, pero menos de diez se le otorga un 20% de descuento; y si son 10 o más se 
les da un 40% de descuento. El precio de cada computadora es de $ X pesos, desarrolle un 
programa que le permita a la empresa de computadores saber el valor de la venta con y sin 
descuento.*/

let cantCompra = 0;
const precioComp = 1000;
let descuento = 0;
let montoTotalSin = 0;
let montoTotalCon = 0;
cantCompra = parseInt(prompt(`Ingrese la cantidad de computadoras que desea comprar, Si son menos de 5 se aplica un 10%
 \n si son 5 o mayor pero menor de 10 se aplica un 20% , Si son mayor o igual a 10 se aplica un 40%`));


if(cantCompra >= 10 ){
    descuento = 0.4;
    montoTotalCon = parseInt((cantCompra * precioComp) - ((cantCompra * precioComp) * descuento));
    montoTotalSin = parseInt((cantCompra * precioComp));

    document.write(`El monto total por la compra de  ${cantCompra} computadoras es de ${montoTotalCon}`);
    document.write(`<br/>El monto total por la compra de  ${cantCompra} aplicando el descuento del 40% es de ${montoTotalSin}`);
}
else if(cantCompra >= 5 ){
    descuento = 0.2;
    montoTotalCon = parseInt((cantCompra * precioComp) - ((cantCompra * precioComp) * descuento));
    montoTotalSin = parseInt((cantCompra * precioComp));

    document.write(`El monto total por la compra de  ${cantCompra} computadoras es de ${montoTotalCon}`);
    document.write(`<br/>El monto total por la compra de  ${cantCompra} aplicando el descuento del 20% es de ${montoTotalSin}`);
}
else{
    descuento = 0.1;
    montoTotalCon = parseInt((cantCompra * precioComp) - ((cantCompra * precioComp) * descuento));
    montoTotalSin = parseInt((cantCompra * precioComp));

    document.write(`El monto total por la compra de  ${cantCompra} computadoras es de $ ${montoTotalCon}`);
    document.write(`<br/>El monto total por la compra de  ${cantCompra} aplicando el descuento del 10% es de $ ${montoTotalSin}`);
}
    },


    Ejercicio13: function() {
/* Una empresa maneja códigos numéricos con las siguientes características: Cada código 
consta de cuatro dígitos: El primero representa una provincia, el segundo el tipo de operación 
y los dos últimos, el número de la operación. Escriba un programa que lea de teclado un 
número de cuatro dígitos, y posteriormente imprima en pantalla la siguiente información: por 
ejemplo, si el código es 5922.
• Provincia: 5
• Tipo de operación: 9
• Número de operación: 22
En caso de que tenga más/menos de 4 dígitos en lugar del mensaje anterior, habrá que 
imprimir en pantalla el siguiente mensaje de error: “Error: Código no valido”. De acuerdo al 
valor de la provincia se debe especificar el área geográfica a que pertenece así:

Cod Provincia        Area Geografica
de 1 al 3                 Norte
del 4 al 6                Sur
del 7 al 9                Este
0                         Oeste

*/
let Provincia = 0;
let TOperacion = 0;
let NOperacion = 0;
let Numero = (prompt("Ingrese el numero de 4 digitos"));
if(Numero.length === 4){
    Provincia = parseInt(Numero.substring(0, 1));
    TOperacion = parseInt(Numero.substring(1, 2));
    NOperacion = parseInt(Numero.substring(2, 4));
    switch(true){
        case (Provincia >=1 && Provincia <=5) :
            document.write(`la zona geografica es Norte`);
            document.write(`<br/> la provincia es : ${Provincia}`);
            document.write(`<br/> el tipo de operacion es : ${TOperacion}`);
            document.write(`<br/> el Numero de operacion es : ${NOperacion}`);
            break;
        case (Provincia>4 && Provincia <=6) :
            document.write(`la zona geografica es Sur`);
            document.write(`<br/> la provincia es : ${Provincia}`);
            document.write(`<br/> el tipo de operacion es : ${TOperacion}`);
            document.write(`<br/> el Numero de operacion es : ${NOperacion}`);
            break;
        case (Provincia>7 && Provincia <=9) :
            document.write(`la zona geografica es Este`);
            document.write(`<br/> la provincia es : ${Provincia}`);
            document.write(`<br/> el tipo de operacion es : ${TOperacion}`);
            document.write(`<br/> el Numero de operacion es : ${NOperacion}`);
            break;
        default:
            document.write(`la zona geografica es Oeste`);
            document.write(`<br/> la provincia es : ${Provincia}`);
            document.write(`<br/> el tipo de operacion es : ${TOperacion}`);
            document.write(`<br/> el Numero de operacion es : ${NOperacion}`);

            break;
    }
   
}
else{
    document.write(`Error: Código no valido`);
}

    },

    Ejercicio14: function() {
/* En una agencia de viajes se desea realizar un programa para determinar el valor a pagar 
por cierta cantidad de pasajes de ida saliendo desde Cúcuta, de acuerdo con la siguiente 
tabla.

               1.Bogota       2.Cali
 1 Clase       250.000        450.000
 2 Clase       180.000        350.000
 3 Clase       150.000        300.000


Determinar el valor a pagar de acuerdo a la clase, realizar un descuento del 10% si se 
compran más de 5 pasajes sin importar la clase.*/


let Destino = 0;
let clase = 0;
let montoTotal = 0;
const descuento = 0.1;
let MontoFinal = 0;
let Viaje = [[]];
let cantidadPasajes = parseInt(prompt("Ingrese la cantidad de pasajes a comprar"));
for(let i = 0; i < cantidadPasajes; i++ ){
     Destino = parseInt(prompt("Ingrese el destino , '1' para Bogota o '2' para Cali"));

    Viaje[[i,0]] = Destino;
    if(Destino == 1){
        clase = parseInt(prompt("Ingrese la clase para viajar a Bogota \n opcion '1'  1 Clase 250.000  \n opcion '2'  2 Clase 180.000  \n opcion '3'  3 Clase 150.000"));
        Viaje[[i,1]] = clase;
        if(clase == 1){
            Viaje[[i,2]] = 250000;
            montoTotal += 250000;
        }
        else if (clase == 2){
            Viaje[[i,2]] = 180000;
            montoTotal += 180000;
        }
        else{
            Viaje[[i,2]] = 150000;
            montoTotal += 150000;
        }
    }
    else{
        clase = parseInt(prompt("Ingrese la clase para viajar a Cali \n opcion '1'  1 Clase 450.000  \n opcion '2'  2 Clase 350.000  \n opcion '3'  3 Clase 300.000"));
        Viaje[[i,1]] = clase;
        if(clase == 1){
            Viaje[[i,2]] = 450000;
            montoTotal += 450000;
        }
        else if (clase == 2){
            Viaje[[i,2]] = 350000;
            montoTotal += 350000;
        }
        else{
            Viaje[[i,2]] = 300000;
            montoTotal += 300000;
        }
    }
    }

if(cantidadPasajes > 5){
    MontoFinal = montoTotal - (montoTotal * descuento);
}
else{
    MontoFinal = montoTotal;
}


document.write(`La cantidad de pasajes a comprar es de ${cantidadPasajes}`);
for(let i = 0; i < cantidadPasajes; i++ ){
    if( Viaje[[i,0]] == 1){
        document.write(`<br/>${i + 1} pasaje para Bogota`);
    }
    else{
        document.write(`<br/>${i + 1} pasaje para Cali`);
    }

    if( Viaje[[i,1]] == 1){
        document.write(`<br/> clase seleccionada: 1 clase`);
    }
    else if( Viaje[[i,1]] == 2){
        document.write(`<br/> clase seleccionada: 2 clase`);
    }
    else{
        document.write(`<br/> clase seleccionada: 3 clase`);
    }
    document.write(`<br/>Monto del pasaje ${Viaje[[i,2]]}`);
}
document.write(`<br/>El monto total por los ${cantidadPasajes} pasajes es de : ${montoTotal}`);
document.write(`<br/>El monto Final por los ${cantidadPasajes} pasajes es de : ${MontoFinal}`);
    },

    Ejercicio15: function() {
/* Calcular el total de dinero propio de una empresa a invertir en una compra, el total de dinero 
solicitado en préstamo al banco y el total de dinero a pagar a la fábrica por concepto de 
crédito. La empresa quiere hacer una compra de N piezas de la misma clase a una fábrica, 
a X pesos cada pieza. La empresa, dependiendo del monto total de la compra, decidirá qué 
hacer para pagar a la fábrica.
• Si el monto total de la compra es mayor de $1 000 000 la empresa tendrá la 
capacidad de invertir de su propio dinero un 55% del monto de la compra, pedir 
prestado al banco un 30% y el resto lo pagará solicitando un crédito al fabricante.
• Si el monto total de la compra está entre $500 000(inclusive) y $1 000 000 la 
empresa tendrá capacidad de invertir de su propio dinero un 60%, pedir prestado al 
banco un 15% y el restante 25% lo pagará solicitando crédito al fabricante.
• Si el monto total de la compra es menor de $500 000 la empresa tendrá capacidad 
de invertir de su propio dinero un 70% y el restante 30% lo pagará solicitando crédito 
al fabricante.
• El fabricante cobra por concepto de intereses un 20% sobre la cantidad que se le 
pague a crédito*/
    },


    Ejercicio16: function() {
/* Calcular el valor de la cuota mensual y el número de cuotas a pagar, por la realización de 
un préstamo en un banco con las siguientes condiciones: Si el préstamo es menor de 
$500000 se paga un interés de 10% sobre el total del préstamo y las cuotas mensuales 
quedan de un 3% del monto total. Si el préstamo está entre $500000 y $1000000(inclusive) 
se paga un interés del 7% y las cuotas quedan de un 5% del monto total. Y si el préstamo 
es superior a $1000000 se paga un interés del 4% y las cuotas quedan de un 7% del monto 
total.*/

/*
cuota mensual
cuotas a pagar

préstamo < $500000 se paga 10% interes sobre el total del prestamo y las cuotas quedan 
3% del monto total

$1000000 > préstamo > $500000 se paga 7% interes sobre el total del prestamo y las cuotas quedan 
5% del monto total

préstamo > $1000000 se paga 4% interes sobre el total del prestamo y las cuotas quedan 
7% del monto total
*/

let prestamo;
let cuotaMensual;
let cantCuotas;
let Interes;
let montoTotal;

prestamo = parseInt(prompt("Ingrese el monto del prestamo a solicitar"));


if(prestamo > 1000000 ){
    Interes = 0.04;
    montoTotal = parseInt(prestamo * (Interes + 1));
    cuotaMensual = parseInt(montoTotal * 0.07);
    cantCuotas = Math.ceil(parseFloat(montoTotal/cuotaMensual));
    document.write(`El prestamo que solicito es de ${prestamo}`);
    document.write(`<br/>El monto total del prestamo con interes es de ${montoTotal}`);
    document.write(`<br/>El monto de cuota mensual es de ${cuotaMensual}`);
    document.write(`<br/>La cantidad de cuotas es de ${cantCuotas}`);
}
else if(prestamo > 500000 ){
    Interes = 0.07;
    montoTotal = parseInt(prestamo * (Interes + 1));
    cuotaMensual = parseInt(montoTotal * 0.05);
    cantCuotas = Math.ceil(parseFloat(montoTotal/cuotaMensual));
    document.write(`El prestamo que solicito es de ${prestamo}`);
    document.write(`<br/>El monto total del prestamo con interes es de ${montoTotal}`);
    document.write(`<br/>El monto de cuota mensual es de ${cuotaMensual}`);
    document.write(`<br/>La cantidad de cuotas es de ${cantCuotas}`);
}
else{
    Interes = 0.1;
    montoTotal = parseInt(prestamo * (Interes + 1));
    cuotaMensual = parseInt(montoTotal * 0.03);
    cantCuotas = Math.ceil(parseFloat(montoTotal/cuotaMensual));
    document.write(`El prestamo que solicito es de ${prestamo}`);
    document.write(`<br/>El monto total del prestamo con interes es de ${montoTotal}`);
    document.write(`<br/>El monto de cuota mensual es de ${cuotaMensual}`);
    document.write(`<br/>La cantidad de cuotas es de ${cantCuotas}`);
}

    }
};


let opcion = parseInt(prompt("Ingrese el numero de ejercicio a realizar del 1 al 16"));
switch(opcion) {
    case 1:
        Practica.Ejercicio1();
      break;
    case 2:
        Practica.Ejercicio2();
      break;
      case 3:
        Practica.Ejercicio3();
      break;
      case 4:
        Practica.Ejercicio4();
      break;
      case 5:
        Practica.Ejercicio5();
      break;
      case 6:
        Practica.Ejercicio6();
      break;
      case 7:
        Practica.Ejercicio7();
      break;
      case 8:
        Practica.Ejercicio8();
      break;
      case 9:
        Practica.Ejercicio9();
      break;
      case 10:
        Practica.Ejercicio10();
      break;
      case 11:
        Practica.Ejercicio11();
      break;
      case 12:
        Practica.Ejercicio12();
      break;
      case 13:
        Practica.Ejercicio13();
      break;
      case 14:
        Practica.Ejercicio14();
      break;
      case 15:
        Practica.Ejercicio15();
      break;
      case 16:
        Practica.Ejercicio16();
      break;
    default:
        document.write(`Usted Ingreso una opcion incorrecta`);
  }






/* 
Realice un programa que muestre en pantalla los diez (10)
primeros números enteros siguientes a un número
ingresado por el usuario con FOR, WHILE y DO WHILE
*/

let numero = parseInt(prompt("Ingrese un numero entero"));
valor = numero;
numero1 = numero;
numero2 = numero;
ciclos = {
   
    for: function() { 
        document.write(` Ciclo for <br/>`);
        for(numero; numero < valor + 10 ; numero++){
            document.write(numero + `<br/>`);
        }
    },
    while: function() { 
        document.write(` Ciclo while <br/>`);
        while(numero1 < valor + 10){
            document.write(numero1 + `<br/>`);
            numero1++;
        }
    },
    do_while: function() { 
        document.write(` Ciclo do while <br/>`);
        do{
            document.write(numero2 + `<br/>`);
            numero2++;       
        }
        while(numero2 < valor + 10);
        }
};
ciclos.for();
ciclos.while();
ciclos.do_while();
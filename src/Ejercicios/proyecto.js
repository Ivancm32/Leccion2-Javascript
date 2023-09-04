/*Cierta empresa de salud nos ha pedido desarrollar un simulador de encuestas y el tema a tratar es el consumo de 
comida chatarra. La encuesta debe poder aplicarse a una cantidad N de personas (N ingresado por el usuario, se 
recomienda una población >15). 
Las preguntas de la encuesta son las siguientes: 
1. Ingrese su tipo de sexo (1-H/2-M): 
2. Usted consume comida chatarra (1-si/2-no): 
(Si la respuesta a la pregunta 2 fue “sí”, debe preguntar) 
3. Que prefiere 1-Hamburguesa, 2-Pizza, 3-Picada: 
(Si la respuesta a la pregunta 2 fue “no”, debe preguntar) 
4. Que prefiere 1-Frutas, 2-Jugos, 3-Suplementos: 
Al finalizar se deben mostrar los siguientes resultados: 
• Cantidad de Hombres y Mujeres encuestados. 
• Cantidad de personas que consumen comida chatarra. 
• Cantidad de personas que no consumen comida chatarra. 
• La comida chatarra que más consumen. 
• Lo que menos gusta a quienes no consumen comida chatarra.
*/

//simulador de encuestas de comidas chatarras
//se aplica a n cantidad de personas(el n lo ingresa el usuario) se recomienda a mayor de 15

let cantidadPersonal = parseInt(prompt("Ingrese la cantidad de personas que seran encuestadas(se recomienda a mayor de 15 personas)"));
let encuestados = [[]];
let cantHombres=0;
let cantMujeres=0;
let cantCCha=0;
let cantSana=0;
let Hamb=0;
let Pizza=0;
let Picar=0;
let Fruta=0;
let jugos=0;
let supleme=0;
let masCCha="";
let menosCsana="";

for(let i = 0 ; i < cantidadPersonal ; i++ ){
    let sexo = parseInt(prompt("Ingrese su tipo de sexo \n 1-H \n 2-M \n persona encuestada # " + (i+1)));
    encuestados[[i,0]] = sexo;
    let ComeCCha = parseInt(prompt("Usted consume comida chatarra \n 1-si \n 2-no \n persona encuestada # " + (i+1)));
    encuestados[[i,1]] = ComeCCha;
    if(ComeCCha == 1){
        let tipoCCha = parseInt(prompt("Que prefiere \n 1-Hamburguesa \n 2-Pizza \n 3-Picada \n persona encuestada # " + (i+1)));
        encuestados[[i,2]] = tipoCCha;
    }
    else{
        let tipoCSana = parseInt(prompt("Que prefiere \n 1-Frutas \n 2-Jugos \n 3-Suplementos \n persona encuestada # " + (i+1)));
        encuestados[[i,3]] = tipoCSana;
    }    
}

for(let i = 0 ; i < cantidadPersonal ; i++ ){
    if(encuestados[[i,0]] == 1){
        cantHombres+=1;
    }
    else{
        cantMujeres+=1;
    }

    if(encuestados[[i,1]] == 1){
        cantCCha+=1;
    }
    else{
        cantSana+=1;
    }

    if(encuestados[[i,2]] == 1){
        Hamb+=1;    
    }
    else if(encuestados[[i,2]] == 2){
        Pizza+=1;
    }
    else if(encuestados[[i,2]] == 3){
        Picar+=1;
    }
    else{
        Hamb+=0;
        Pizza+=0;
        Picar+=0;
    }

    if(encuestados[[i,3]] == 1){
        Fruta+=1;
    }
    else if(encuestados[[i,3]] == 2){
        jugos+=1;
    }
    else if(encuestados[[i,3]] == 3){
        supleme+=1;
    }
    else{
        supleme+=0;
        jugos+=0;
        Fruta+=0;
    }

}
/*
pxh
000
001
010
011
100
101
110
111
*/
if(Hamb === 0 & Pizza === 0 && Picar === 0){
    masCCha = "No se selecciono ninguno";
}
else{
    if(Hamb > Pizza && Hamb > Picar){
        masCCha = "Hamburguesas";
    }
    else if(Pizza > Hamb && Pizza > Picar){
        masCCha = "Pizza";
    }
    else if(Hamb === Pizza && Hamb > Picar){
        masCCha = "Hamburguesas y Pizza";
    }
    else if(Picar > Hamb && Picar > Pizza){
        masCCha = "Picadas";
    }
    else if(Picar === Hamb && Picar > Pizza){
        masCCha = "Picadas y Hamburguesas";
    }
    else if(Picar === Pizza && Picar > Hamb){
        masCCha = "Picadas y Pizza";
    }
    else if(Picar === Pizza && Picar === Hamb){
        masCCha = "Picadas , Hamburguesas y Pizza";
    }
}

console.log("hamb " + Hamb);
console.log("picar " + Picar);
console.log("Pizza " + Pizza);
console.log("Fruta " + Fruta);
console.log("Jugo " + jugos);
console.log("Suplementos " + supleme);


if(Fruta === 0 & jugos === 0 && supleme === 0){
    menosCsana = "No se selecciono ninguno";
}
else{
    if(Fruta < jugos && Fruta < supleme){
        menosCsana = "Frutas";
    }
    else if(jugos < Fruta && jugos < supleme){
        menosCsana = "Jugos";
    }
    else if(Fruta === jugos && Fruta < supleme){
        menosCsana = "Frutas y Jugos ";
    }
    else if(supleme < Fruta && supleme < jugos){
        menosCsana = "Suplementos";
    }
    else if(supleme === Fruta && supleme < jugos){
        menosCsana = "Suplementos y Frutas";
    }
    else if(supleme === jugos && supleme < Fruta){
        menosCsana = "Suplementos y Jugos";
    }
    else if(supleme === jugos && supleme === Fruta){
        menosCsana = "Suplementos , Frutas y Jugos";
    }
}


document.write(`La cantidad de hombres encuentados fue de : ${cantHombres}`);
document.write(` y de mujeres fue de : ${cantMujeres}`);
document.write(`<br/>La cantidad de personas que consumen comida chatarra fue de : ${cantCCha}`);
document.write(`<br/>La cantidad de personas que NO consumen comida chatarra fue de : ${cantSana}`);
document.write(`<br/>La comida Chatarra que mas consumen es : '${masCCha}'`);
document.write(`<br/>La comida que menos gusta a quienes no consumen comida chatarra es : '${menosCsana}'`);

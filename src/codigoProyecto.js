import {getConnection1,sql,querys} from "./databases";


export async function proyecto (req,res){

const pool = await getConnection1();
//pasamos nuestra consulta por medio de la peticion y todo este proceso es asincrono por lo que la respuesta no es inmediata
//es por ese motivio que se utiliza el wait
const resultado = await pool.request().query(querys.cantidadEncuestas);
//console.log(resultado.recordset.length);

let NEncuesta = 0;
    if(resultado.recordset.length == 0){
         NEncuesta = 1;
    }
    else{
         NEncuesta = (parseInt(resultado.recordset[0].n_encuesta) + 1);
    }

    const readline = require('readline');
const readlineInterface = readline.createInterface({
        input: process.stdin,
        output: process.stdout
});

// nueva función que promete hacer una pregunta y
// resuelve su respuesta
function ask(questionText) {
  return new Promise((resolve, reject) => {
    readlineInterface.question(questionText, (input) => resolve(input) );
  });
}

// inicia tu programa ya que `await` solo funciona dentro de funciones `async`
start()

// usa la función "preguntar" basada en promesas para hacer varias preguntas
// en una fila y asigna cada respuesta a una variable
async function start() {
  console.log()
    let cantidadPersonal = 0;
    let sexo = 0;
    let ComeCCha = 0;
    let tipoCCha = 0;
    let tipoCSana = 0;
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

    cantidadPersonal = await ask('Ingrese la cantidad de personas que seran encuestadas(se recomienda a mayor de 15 personas) \n'); 

        for(let i = 0 ; i < cantidadPersonal ; i++ ){
            sexo = await ask('Ingrese su tipo de sexo \n 1-H \n 2-M \n persona encuestada # ' + (i+1) + '\n');
            encuestados[[i,0]] = sexo;

            let ComeCCha = await ask('Usted consume comida chatarra \n 1-si \n 2-no \n persona encuestada # ' + (i+1)+ '\n');
            encuestados[[i,1]] = ComeCCha;

            if(ComeCCha == 1){
                tipoCCha = await ask('Que prefiere \n 1-Hamburguesa \n 2-Pizza \n 3-Picada \n persona encuestada # ' + (i+1)+ '\n');
                encuestados[[i,2]] = tipoCCha;
            }
            else{
                    tipoCSana = await ask('Que prefiere \n 1-Frutas \n 2-Jugos \n 3-Suplementos \n persona encuestada # ' + (i+1)+ '\n');
                    encuestados[[i,3]] = tipoCSana;      
            }

            let dat = new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '');
    
            const pool = await getConnection1();
            await pool.request()
            .input("Nencuesta",sql.Int,NEncuesta)
            .input("NPE",sql.Int,(i+1))
            .input("genero",sql.Int,encuestados[[i,0]])
            .input("TComida",sql.Int,encuestados[[i,1]])
            .input("CCha",sql.Int,encuestados[[i,2]])
            .input("CSan",sql.Int,encuestados[[i,3]])
            .input("Fecha",sql.VarChar,dat)
            .query(querys.insertaEncuesta);
        
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

        console.log(`La cantidad de hombres encuentados fue de : ${cantHombres}`);
        console.log(` y de mujeres fue de : ${cantMujeres}`);
        console.log(`<br/>La cantidad de personas que consumen comida chatarra fue de : ${cantCCha}`);
        console.log(`<br/>La cantidad de personas que NO consumen comida chatarra fue de : ${cantSana}`);
        console.log(`<br/>La comida Chatarra que mas consumen es : '${masCCha}'`);
        console.log(`<br/>La comida que menos gusta a quienes no consumen comida chatarra es : '${menosCsana}'`);
        res.send(`La cantidad de hombres encuentados fue de : ${cantHombres}  y de mujeres fue de : ${cantMujeres}
        <br/>La cantidad de personas que consumen comida chatarra fue de : ${cantCCha}
        <br/>La cantidad de personas que NO consumen comida chatarra fue de : ${cantSana}
        <br/>La comida Chatarra que mas consumen es : '${masCCha}'
        <br/>La comida que menos gusta a quienes no consumen comida chatarra es : '${menosCsana}'
        `)
   
}
}
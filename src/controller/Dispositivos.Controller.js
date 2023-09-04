//export const getDispositivos = (req,res) => res.send('Dispositivos!!!');

import {DateTime, Int} from "mssql";
import {getConnection,getConnection1,sql,querys} from "../databases";


export const getDispositivos = async (req,res) => 
//res.send('Dispositivos!!!');
{
try{

    
    //Realizamos el llamado de la conexion
    const pool = await getConnection();
    //pasamos nuestra consulta por medio de la peticion y todo este proceso es asincrono por lo que la respuesta no es inmediata
    //es por ese motivio que se utiliza el wait
    const result = await pool.request().query(querys.getDispositivos);
    //console.log(result)
    res.json(result.recordset);

} catch (error){
    res.status(500);
    res.send(error.message)
}

};

export const createNewDispositivo = async (req,res) => {

    
    const {Nombre_Equipo,ADDR,Timestamp} = req.body;
    let mensaje = "Producto Insertado";
    if(Nombre_Equipo == null || ADDR == null || Timestamp == null  ){
        return res.status(400).json({msg: 'Bad Request por favor llena todos los campos' })
    }

    try{    
    const pool = await getConnection();
    console.log(Nombre_Equipo,ADDR,Timestamp);
    res.json({Nombre_Equipo,ADDR,Timestamp,mensaje});

    await pool.request()
    .input("Nombre",sql.VarChar,Nombre_Equipo)
    .input("AD",sql.VarChar,ADDR)
    .input("Time",sql.VarChar,Timestamp)
    .query(querys.createDispositivo);
} catch (error){
    res.status(500);
    res.send(error.message)
}
};

export const getDispositivos_ID = async (req,res) => 
//res.send('Dispositivos!!!');
{
try{
    const {id} = req.params;
    const pool = await getConnection();
    //pasamos nuestra consulta por medio de la peticion y todo este proceso es asincrono por lo que la respuesta no es inmediata
    //es por ese motivio que se utiliza el wait
    const result = await pool.request()
    .input("id",id)
    .query(querys.getID);
    //console.log(result)
    //res.json(result.recordset);
    console.log(result);

    res.send(result.recordset[0]);
} catch (error){
    res.status(500);
    res.send(error.message)
}

};


export const DeleteDispositivos_ID = async (req,res) => 
//res.send('Dispositivos!!!');
{
try{
    const {id} = req.params;
    const pool = await getConnection();
    //pasamos nuestra consulta por medio de la peticion y todo este proceso es asincrono por lo que la respuesta no es inmediata
    //es por ese motivio que se utiliza el wait
    const result = await pool.request()
    .input("id",id)
    .query(querys.DeleteID);
    //console.log(result)
    //res.json(result.recordset);
    console.log(result);
    res.sendStatus(204);

    //res.send(result);
} catch (error){
    res.status(500);
    res.send(error.message)
}

};


export const TotalDispositivos = async (req,res) => 
//res.send('Dispositivos!!!');
{
try{
    const pool = await getConnection();
    //pasamos nuestra consulta por medio de la peticion y todo este proceso es asincrono por lo que la respuesta no es inmediata
    //es por ese motivio que se utiliza el wait
    const result = await pool.request()
    .query(querys.getTtotal);
    //console.log(result)
    //res.json(result.recordset);
    console.log(result);
    res.json(result.recordset[0]['']);

    //res.send(result);
} catch (error){
    res.status(500);
    res.send(error.message)
}

};


export const updateDispositivos = async (req,res) => 
{
const {Nombre_Equipo,ADDR,Timestamp} = req.body;
const {id} = req.params;
let mensaje = "Producto actualizado";

if(Nombre_Equipo == null || ADDR == null || Timestamp == null  ){
    return res.status(400).json({msg: 'Bad Request por favor llena todos los campos' })
}

try{
    //Realizamos el llamado de la conexion
    const pool = await getConnection();
    //pasamos nuestra consulta por medio de la peticion y todo este proceso es asincrono por lo que la respuesta no es inmediata
    //es por ese motivio que se utiliza el wait
    await pool.request()
    .input("Nombre",sql.VarChar,Nombre_Equipo)
    .input("AD",sql.VarChar,ADDR)
    .input("Time",sql.VarChar,Timestamp)
    .input("id",id)
    .query(querys.UpdateDispositivos);
    console.log(Nombre_Equipo,ADDR,Timestamp);
    res.json({Nombre_Equipo,ADDR,Timestamp,mensaje});
    
} catch (error){
    res.status(500);
    res.send(error.message)
}

};

export const ejercicio2 =  (request,response) => 
//res.send('Dispositivos!!!');
{
try{
    response.sendFile('Ejercicios/EjerciciosNode/ejercicio2.html', { root: "../01_leccion_variables/src/" })
} catch (error){
    response.status(500);
    response.send(error.message)
}

};

export const ejercicio3 =  (request,response) => 
//res.send('Dispositivos!!!');
{
try{
    response.sendFile('Ejercicios/EjerciciosNode/ejercicio3.html', { root: "../01_leccion_variables/src/" })
} catch (error){
    response.status(500);
    response.send(error.message)
}

};


export const ejercicio4 =  (request,response) => 
//res.send('Dispositivos!!!');
{
try{
    response.sendFile('Ejercicios/EjerciciosNode/ejercicio4.html', { root: "../01_leccion_variables/src/" })
} catch (error){
    response.status(500);
    response.send(error.message)
}

};

export const ejercicio5 =  (request,response) => 
//res.send('Dispositivos!!!');
{
try{
    response.sendFile('Ejercicios/EjerciciosNode/ejercicio5.html', { root: "../01_leccion_variables/src/" })
} catch (error){
    response.status(500);
    response.send(error.message)
}

};

export const ejercicio6 =  (request,response) => 
//res.send('Dispositivos!!!');
{
try{
    response.sendFile('Ejercicios/EjerciciosNode/ejercicio6.html', { root: "../01_leccion_variables/src/" })
} catch (error){
    response.status(500);
    response.send(error.message)
}

};


export const index =  (request,response) => 
//res.send('Dispositivos!!!');
{
try{
    response.sendFile('Ejercicios/EjerciciosNode/index.html', { root: "../01_leccion_variables/src/" })
} catch (error){
    response.status(500);
    response.send(error.message)
}

};

export const tarea =  (request,response) => 
//res.send('Dispositivos!!!');
{
try{
    response.sendFile('Ejercicios/EjerciciosNode/tarea.html', { root: "../01_leccion_variables/src/" })
} catch (error){
    response.status(500);
    response.send(error.message)
}

};


export const getProyecto =  (request,response) => 
//res.send('Dispositivos!!!');
{
try{
    response.sendFile('Ejercicios/EjerciciosNode/proyecto.html', { root: "../01_leccion_variables/src/" })
} catch (error){
    response.status(500);
    response.send(error.message)
}

};

export const getEncuesta = async (req,res) => 
//res.send('Dispositivos!!!');
{

try{

    const pool = await getConnection1();
    //pasamos nuestra consulta por medio de la peticion y todo este proceso es asincrono por lo que la respuesta no es inmediata
    //es por ese motivio que se utiliza el wait
    const resultado = await pool.request().query(querys.cantidadEncuestas);
    //console.log(resultado.recordset[0].n_encuesta);
    let NEncuesta = (parseInt(resultado.recordset[0].n_encuesta) + 1);

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
            .input("NPE",sql.Int,i)
            .input("genero",sql.Int,sexo)
            .input("TComida",sql.Int,ComeCCha)
            .input("CCha",sql.Int,tipoCCha)
            .input("CSan",sql.Int,tipoCSana)
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

    
} catch (error){
    res.status(500);
    res.send(error.message)
}

};

export const menu =  (request,response) => 
//res.send('Dispositivos!!!');
{
try{
    response.send(`
    <h1>Trabajos realizados en curso de Javascript</h1>
    <a href = '/ejercicio2'>ejercicio2 (Pulsaciones)</a> <br/>
    <a href = '/ejercicio3'>ejercicio3</a> (Par o Impar) <br/>
    <a href = '/ejercicio4'>ejercicio4</a> (TALLER DE CONDICIONAL IF – ELSE 16 ejercicios) <br/>
    <a href = '/ejercicio5'>ejercicio5</a> (Ciclos) <br/>
    <a href = '/ejercicio6'>ejercicio6</a> (calculo de notas) <br/>
    <a href = '/index'>index</a> (temperaturas) <br/>
    <a href = '/tarea'>tarea</a> (numero invertido) <br/>
    <a href = '/Dispositivos'>ver Productos de base de datos</a> <br/>
    <a href = '/proyecto'>Encuesta con Javascript</a> <br/>  
    <a href = '/encuesta'>Encuesta con NodeJs guardando en base de datos</a> <br/>      
    `)
} catch (error){
    response.status(500);
    response.send(error.message)
}

};



//const result = await pool.request().query('select * from Dispositivos');
//console.log(result);
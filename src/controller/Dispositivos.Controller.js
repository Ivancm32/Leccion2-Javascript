//export const getDispositivos = (req,res) => res.send('Dispositivos!!!');

import {DateTime, Int} from "mssql";
import {getConnection,getConnection1,sql,querys} from "../databases";
import {proyecto} from "../codigoProyecto";

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


export const holaMundo =  (request,response) => 
//res.send('Dispositivos!!!');
{
try{
    response.sendFile('Ejercicios/EjerciciosNode/PrimerSemana/holaMundo.html', { root: "../01_leccion_variables/src/" })
} catch (error){
    response.status(500);
    response.send(error.message)
}

};

export const lecturasVariables =  (request,response) => 
//res.send('Dispositivos!!!');
{
try{
    response.sendFile('Ejercicios/EjerciciosNode/PrimerSemana/lecturasVariables.html', { root: "../01_leccion_variables/src/" })
} catch (error){
    response.status(500);
    response.send(error.message)
}

};


export const promedio =  (request,response) => 
//res.send('Dispositivos!!!');
{
try{
    response.sendFile('Ejercicios/EjerciciosNode/PrimerSemana/promedio.html', { root: "../01_leccion_variables/src/" })
} catch (error){
    response.status(500);
    response.send(error.message)
}

};

export const alturaCono =  (request,response) => 
//res.send('Dispositivos!!!');
{
try{
    response.sendFile('Ejercicios/EjerciciosNode/PrimerSemana/alturaCono.html', { root: "../01_leccion_variables/src/" })
} catch (error){
    response.status(500);
    response.send(error.message)
}

};

export const Celsius_fahrenheit =  (request,response) => 
//res.send('Dispositivos!!!');
{
try{
    response.sendFile('Ejercicios/EjerciciosNode/PrimerSemana/Celsius_fahrenheit.html', { root: "../01_leccion_variables/src/" })
} catch (error){
    response.status(500);
    response.send(error.message)
}

};


export const Modulo =  (request,response) => 
//res.send('Dispositivos!!!');
{
try{
    response.sendFile('Ejercicios/EjerciciosNode/SegundaSemana/Modulo.html', { root: "../01_leccion_variables/src/" })
} catch (error){
    response.status(500);
    response.send(error.message)
}

};

export const Aprobo_Repro =  (request,response) => 
//res.send('Dispositivos!!!');
{
try{
    response.sendFile('Ejercicios/EjerciciosNode/SegundaSemana/Aprobo_Reprobo.html', { root: "../01_leccion_variables/src/" })
} catch (error){
    response.status(500);
    response.send(error.message)
}

};

export const Ciclos =  (request,response) => 
//res.send('Dispositivos!!!');
{
try{
    response.sendFile('Ejercicios/EjerciciosNode/SegundaSemana/Ciclos.html', { root: "../01_leccion_variables/src/" })
} catch (error){
    response.status(500);
    response.send(error.message)
}

};

export const if_else_ejercicio1 =  (request,response) => 
//res.send('Dispositivos!!!');
{
try{
    response.sendFile('Ejercicios/EjerciciosNode/Practica_IF_Else/ejercicio1.html', { root: "../01_leccion_variables/src/" })
} catch (error){
    response.status(500);
    response.send(error.message)
}

};

export const if_else_ejercicio2 =  (request,response) => 
//res.send('Dispositivos!!!');
{
try{
    response.sendFile('Ejercicios/EjerciciosNode/Practica_IF_Else/ejercicio2.html', { root: "../01_leccion_variables/src/" })
} catch (error){
    response.status(500);
    response.send(error.message)
}

};

export const if_else_ejercicio3 =  (request,response) => 
//res.send('Dispositivos!!!');
{
try{
    response.sendFile('Ejercicios/EjerciciosNode/Practica_IF_Else/ejercicio3.html', { root: "../01_leccion_variables/src/" })
} catch (error){
    response.status(500);
    response.send(error.message)
}

};

export const if_else_ejercicio4 =  (request,response) => 
//res.send('Dispositivos!!!');
{
try{
    response.sendFile('Ejercicios/EjerciciosNode/Practica_IF_Else/ejercicio4.html', { root: "../01_leccion_variables/src/" })
} catch (error){
    response.status(500);
    response.send(error.message)
}

};

export const if_else_ejercicio5 =  (request,response) => 
//res.send('Dispositivos!!!');
{
try{
    response.sendFile('Ejercicios/EjerciciosNode/Practica_IF_Else/ejercicio5.html', { root: "../01_leccion_variables/src/" })
} catch (error){
    response.status(500);
    response.send(error.message)
}

};

export const if_else_ejercicio6 =  (request,response) => 
//res.send('Dispositivos!!!');
{
try{
    response.sendFile('Ejercicios/EjerciciosNode/Practica_IF_Else/ejercicio6.html', { root: "../01_leccion_variables/src/" })
} catch (error){
    response.status(500);
    response.send(error.message)
}

};

export const if_else_ejercicio7 =  (request,response) => 
//res.send('Dispositivos!!!');
{
try{
    response.sendFile('Ejercicios/EjerciciosNode/Practica_IF_Else/ejercicio7.html', { root: "../01_leccion_variables/src/" })
} catch (error){
    response.status(500);
    response.send(error.message)
}

};

export const if_else_ejercicio8 =  (request,response) => 
//res.send('Dispositivos!!!');
{
try{
    response.sendFile('Ejercicios/EjerciciosNode/Practica_IF_Else/ejercicio8.html', { root: "../01_leccion_variables/src/" })
} catch (error){
    response.status(500);
    response.send(error.message)
}

};


export const if_else_ejercicio9 =  (request,response) => 
//res.send('Dispositivos!!!');
{
try{
    response.sendFile('Ejercicios/EjerciciosNode/Practica_IF_Else/ejercicio9.html', { root: "../01_leccion_variables/src/" })
} catch (error){
    response.status(500);
    response.send(error.message)
}

};


export const if_else_ejercicio10 =  (request,response) => 
//res.send('Dispositivos!!!');
{
try{
    response.sendFile('Ejercicios/EjerciciosNode/Practica_IF_Else/ejercicio10.html', { root: "../01_leccion_variables/src/" })
} catch (error){
    response.status(500);
    response.send(error.message)
}

};


export const if_else_ejercicio11 =  (request,response) => 
//res.send('Dispositivos!!!');
{
try{
    response.sendFile('Ejercicios/EjerciciosNode/Practica_IF_Else/ejercicio11.html', { root: "../01_leccion_variables/src/" })
} catch (error){
    response.status(500);
    response.send(error.message)
}

};

export const if_else_ejercicio12 =  (request,response) => 
//res.send('Dispositivos!!!');
{
try{
    response.sendFile('Ejercicios/EjerciciosNode/Practica_IF_Else/ejercicio12.html', { root: "../01_leccion_variables/src/" })
} catch (error){
    response.status(500);
    response.send(error.message)
}

};

export const if_else_ejercicio13 =  (request,response) => 
//res.send('Dispositivos!!!');
{
try{
    response.sendFile('Ejercicios/EjerciciosNode/Practica_IF_Else/ejercicio13.html', { root: "../01_leccion_variables/src/" })
} catch (error){
    response.status(500);
    response.send(error.message)
}

};


export const if_else_ejercicio14 =  (request,response) => 
//res.send('Dispositivos!!!');
{
try{
    response.sendFile('Ejercicios/EjerciciosNode/Practica_IF_Else/ejercicio14.html', { root: "../01_leccion_variables/src/" })
} catch (error){
    response.status(500);
    response.send(error.message)
}

};


export const if_else_ejercicio15 =  (request,response) => 
//res.send('Dispositivos!!!');
{
try{
    response.sendFile('Ejercicios/EjerciciosNode/Practica_IF_Else/ejercicio15.html', { root: "../01_leccion_variables/src/" })
} catch (error){
    response.status(500);
    response.send(error.message)
}

};


export const if_else_ejercicio16 =  (request,response) => 
//res.send('Dispositivos!!!');
{
try{
    response.sendFile('Ejercicios/EjerciciosNode/Practica_IF_Else/ejercicio16.html', { root: "../01_leccion_variables/src/" })
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

export const for_ejercicio1 =  (request,response) => 
//res.send('Dispositivos!!!');
{
try{
    response.sendFile('Ejercicios/EjerciciosNode/Taller_FOR/ejercicio1.html', { root: "../01_leccion_variables/src/" })
} catch (error){
    response.status(500);
    response.send(error.message)
}

};

export const for_ejercicio2 =  (request,response) => 
//res.send('Dispositivos!!!');
{
try{
    response.sendFile('Ejercicios/EjerciciosNode/Taller_FOR/ejercicio2.html', { root: "../01_leccion_variables/src/" })
} catch (error){
    response.status(500);
    response.send(error.message)
}

};

export const for_ejercicio3 =  (request,response) => 
//res.send('Dispositivos!!!');
{
try{
    response.sendFile('Ejercicios/EjerciciosNode/Taller_FOR/ejercicio3.html', { root: "../01_leccion_variables/src/" })
} catch (error){
    response.status(500);
    response.send(error.message)
}

};

export const for_ejercicio4 =  (request,response) => 
//res.send('Dispositivos!!!');
{
try{
    response.sendFile('Ejercicios/EjerciciosNode/Taller_FOR/ejercicio4.html', { root: "../01_leccion_variables/src/" })
} catch (error){
    response.status(500);
    response.send(error.message)
}

};

export const for_ejercicio5 =  (request,response) => 
//res.send('Dispositivos!!!');
{
try{
    response.sendFile('Ejercicios/EjerciciosNode/Taller_FOR/ejercicio5.html', { root: "../01_leccion_variables/src/" })
} catch (error){
    response.status(500);
    response.send(error.message)
}

};

export const for_ejercicio6 =  (request,response) => 
//res.send('Dispositivos!!!');
{
try{
    response.sendFile('Ejercicios/EjerciciosNode/Taller_FOR/ejercicio6.html', { root: "../01_leccion_variables/src/" })
} catch (error){
    response.status(500);
    response.send(error.message)
}

};

export const for_ejercicio7 =  (request,response) => 
//res.send('Dispositivos!!!');
{
try{
    response.sendFile('Ejercicios/EjerciciosNode/Taller_FOR/ejercicio7.html', { root: "../01_leccion_variables/src/" })
} catch (error){
    response.status(500);
    response.send(error.message)
}

};

export const for_ejercicio8 =  (request,response) => 
//res.send('Dispositivos!!!');
{
try{
    response.sendFile('Ejercicios/EjerciciosNode/Taller_FOR/ejercicio8.html', { root: "../01_leccion_variables/src/" })
} catch (error){
    response.status(500);
    response.send(error.message)
}

};

export const for_ejercicio9 =  (request,response) => 
//res.send('Dispositivos!!!');
{
try{
    response.sendFile('Ejercicios/EjerciciosNode/Taller_FOR/ejercicio9.html', { root: "../01_leccion_variables/src/" })
} catch (error){
    response.status(500);
    response.send(error.message)
}

};

export const for_ejercicio10 =  (request,response) => 
//res.send('Dispositivos!!!');
{
try{
    response.sendFile('Ejercicios/EjerciciosNode/Taller_FOR/ejercicio10.html', { root: "../01_leccion_variables/src/" })
} catch (error){
    response.status(500);
    response.send(error.message)
}

};

export const for_ejercicio11 =  (request,response) => 
//res.send('Dispositivos!!!');
{
try{
    response.sendFile('Ejercicios/EjerciciosNode/Taller_FOR/ejercicio11.html', { root: "../01_leccion_variables/src/" })
} catch (error){
    response.status(500);
    response.send(error.message)
}

};

export const for_ejercicio12 =  (request,response) => 
//res.send('Dispositivos!!!');
{
try{
    response.sendFile('Ejercicios/EjerciciosNode/Taller_FOR/ejercicio12.html', { root: "../01_leccion_variables/src/" })
} catch (error){
    response.status(500);
    response.send(error.message)
}

};

export const for_ejercicio13 =  (request,response) => 
//res.send('Dispositivos!!!');
{
try{
    response.sendFile('Ejercicios/EjerciciosNode/Taller_FOR/ejercicio13.html', { root: "../01_leccion_variables/src/" })
} catch (error){
    response.status(500);
    response.send(error.message)
}

};

export const for_ejercicio14 =  (request,response) => 
//res.send('Dispositivos!!!');
{
try{
    response.sendFile('Ejercicios/EjerciciosNode/Taller_FOR/ejercicio14.html', { root: "../01_leccion_variables/src/" })
} catch (error){
    response.status(500);
    response.send(error.message)
}

};

export const for_ejercicio15 =  (request,response) => 
//res.send('Dispositivos!!!');
{
try{
    response.sendFile('Ejercicios/EjerciciosNode/Taller_FOR/ejercicio15.html', { root: "../01_leccion_variables/src/" })
} catch (error){
    response.status(500);
    response.send(error.message)
}

};

export const for_ejercicio16 =  (request,response) => 
//res.send('Dispositivos!!!');
{
try{
    response.sendFile('Ejercicios/EjerciciosNode/Taller_FOR/ejercicio16.html', { root: "../01_leccion_variables/src/" })
} catch (error){
    response.status(500);
    response.send(error.message)
}

};

export const for_ejercicio17 =  (request,response) => 
//res.send('Dispositivos!!!');
{
try{
    response.sendFile('Ejercicios/EjerciciosNode/Taller_FOR/ejercicio17.html', { root: "../01_leccion_variables/src/" })
} catch (error){
    response.status(500);
    response.send(error.message)
}

};

export const for_ejercicio18 =  (request,response) => 
//res.send('Dispositivos!!!');
{
try{
    response.sendFile('Ejercicios/EjerciciosNode/Taller_FOR/ejercicio18.html', { root: "../01_leccion_variables/src/" })
} catch (error){
    response.status(500);
    response.send(error.message)
}

};

export const for_ejercicio19 =  (request,response) => 
//res.send('Dispositivos!!!');
{
try{
    response.sendFile('Ejercicios/EjerciciosNode/Taller_FOR/ejercicio19.html', { root: "../01_leccion_variables/src/" })
} catch (error){
    response.status(500);
    response.send(error.message)
}

};


export const for_ejercicio20 =  (request,response) => 
//res.send('Dispositivos!!!');
{
try{
    response.sendFile('Ejercicios/EjerciciosNode/Taller_FOR/ejercicio20.html', { root: "../01_leccion_variables/src/" })
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
    proyecto(req,res);
} catch (error){
    res.status(500);
    res.send(error.message)
}

};

/*
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
*/


//const result = await pool.request().query('select * from Dispositivos');
//console.log(result);
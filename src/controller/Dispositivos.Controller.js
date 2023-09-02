//export const getDispositivos = (req,res) => res.send('Dispositivos!!!');

import { Int } from "mssql";
import {getConnection,sql,querys} from "../databases";

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



//const result = await pool.request().query('select * from Dispositivos');
//console.log(result);
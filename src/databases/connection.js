//importar libreria de mssql
import sql from 'mssql';
import config from '../config';

//Configuracion de base de datos
const dbSetting = {
    user : config.dbUser ,
    password : config.dbPassword,
    server : config.dbServer,
    database : config.dbname,
    port : parseInt(config.dbport),
options: {
  encrypt: true, // for azure
  trustServerCertificate: true // change to true for local dev / self-signed certs
}
}

const dbSetting1 = {
    user : config.dbUser ,
    password : config.dbPassword,
    server : config.dbServer,
    database : config.dbname1,
    port : parseInt(config.dbport),
options: {
  encrypt: true, // for azure
  trustServerCertificate: true // change to true for local dev / self-signed certs
}
}

 export async function getConnection(){
    try {
        //returnamos el pool cuando es llamado con la configuracion
        const pool = await sql.connect(dbSetting);
        return pool;
    }
    catch (error){
        console.error(error)
    }
}

export async function getConnection1(){
    try {
        //returnamos el pool cuando es llamado con la configuracion
        const pool = await sql.connect(dbSetting1);
        return pool;
    }
    catch (error){
        console.error(error)
    }
}

export {sql};
//getConnection();
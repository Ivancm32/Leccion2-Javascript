
import {config} from 'dotenv';
config();

//console.log(process.env.HELLO);

//llamo a mi variable de entorno que se encuentra en .env y si no esta definida o esta ocupada utilizara el 3000
export default{
    port: process.env.PORT || 3000,
    dbUser: process.env.DBUSER || '',
    dbPassword: process.env.DBPASS || '',
    dbServer: process.env.DBSERVER || '',
    dbname: process.env.DBNAME || '',
    dbname1: process.env.DBNAME1 || '',
    dbport: process.env.DBPORT || ''
}
//llamamos a nuestro app y extraemos el puerto donde esta configurado desde el config

/* en el package.json  ingresamos nuestro archivo principal que ejecutara el node js
 babel nos permite ejecutar todo cambio que realicemos automaticamente, 
 y el nodemon para revisando si hay cambios. Definimos la direccion del del archivo que pasara revisando */

import app from './app';
import './databases/connection';
app.listen(app.get('port'));

//imprime el puerto de escucha
console.log('Servidor conectado al puerto :', app.get('port'));
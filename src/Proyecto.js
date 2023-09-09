//llamamos a nuestro app y extraemos el puerto donde esta configurado desde el config

/* en el package.json  ingresamos nuestro archivo principal que ejecutara el node js
 babel nos permite ejecutar todo cambio que realicemos automaticamente, 
 y el nodemon para revisando si hay cambios. Definimos la direccion del del archivo que pasara revisando */

import { request } from 'express';
import app from './app';
import './databases/connection';

app.listen(app.get('port'));

//imprime el puerto de escucha
console.log('Servidor conectado al puerto :', app.get('port'));

/*
Clona el repositorio:git clone https://github.com/twbs/bootstrap.git
Instalar con npm :npm install bootstrap@v5.3.1
Instalar con hilo :yarn add bootstrap@v5.3.1
Instalar con Composer :composer require twbs/bootstrap:5.3.1
Instalar con NuGet : CSS: Install-Package bootstrapSass:Install-Package bootstrap.sass
*/

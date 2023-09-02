import express from 'express';
import config from './config';
import productRoutes from './routes/Dispositivos.routes';

//express nos permite poder configurar nuestro servidor donde se va a ejecutar la aplicacacion
const app = express();

//llama a la configuracion del archivo config donde se encuentra configurado el puerto
app.set('port', config.port);

app.use(express.json());

app.use(express.urlencoded({extended: false}))

app.use(productRoutes);

//nos permite exportar a otro archivo las caracteristicas de app
export default app;


// permite traer rutas por urls

import {Router} from 'express';
import { createNewDispositivo, getDispositivos, getDispositivos_ID, DeleteDispositivos_ID,TotalDispositivos, updateDispositivos
,ejercicio2,ejercicio3,ejercicio4,ejercicio5,ejercicio6,index,tarea,menu, getEncuesta,getProyecto} from '../controller/Dispositivos.Controller';
const router = Router();

router.get('/Dispositivos', getDispositivos);

router.post('/Dispositivos', createNewDispositivo);

router.get('/Dispositivos/:id',getDispositivos_ID);

router.post('/Dispositivos/count',TotalDispositivos);

router.delete('/Dispositivos/:id', DeleteDispositivos_ID );

router.put('/Dispositivos/:id', updateDispositivos );

router.get('/ejercicio2', ejercicio2);

router.get('/ejercicio3', ejercicio3);

router.get('/ejercicio4', ejercicio4);

router.get('/ejercicio5', ejercicio5);

router.get('/ejercicio6', ejercicio6);

router.get('/index', index);

router.get('/tarea', tarea);

router.get('/', menu);
router.get('/encuesta', getEncuesta);
router.get('/proyecto', getProyecto);

export default router;
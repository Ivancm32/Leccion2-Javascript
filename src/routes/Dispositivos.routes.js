// permite traer rutas por urls

import {Router} from 'express';
import { createNewDispositivo, getDispositivos, getDispositivos_ID, DeleteDispositivos_ID,TotalDispositivos, updateDispositivos } from '../controller/Dispositivos.Controller';
const router = Router();

router.get('/Dispositivos', getDispositivos);

router.post('/Dispositivos', createNewDispositivo);

router.get('/Dispositivos/:id',getDispositivos_ID);

router.post('/Dispositivos/count',TotalDispositivos);

router.delete('/Dispositivos/:id', DeleteDispositivos_ID );

router.put('/Dispositivos/:id', updateDispositivos );

export default router;
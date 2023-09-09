// permite traer rutas por urls

import {Router} from 'express';
import { createNewDispositivo, getDispositivos, getDispositivos_ID, DeleteDispositivos_ID,TotalDispositivos, updateDispositivos
,holaMundo,lecturasVariables,promedio,alturaCono,Celsius_fahrenheit,Modulo,index,tarea, getEncuesta,getProyecto
,if_else_ejercicio1,if_else_ejercicio2,if_else_ejercicio3,if_else_ejercicio4,if_else_ejercicio5,if_else_ejercicio6,if_else_ejercicio7,
if_else_ejercicio8,if_else_ejercicio9,if_else_ejercicio10,if_else_ejercicio11,if_else_ejercicio12,if_else_ejercicio13,if_else_ejercicio14,
if_else_ejercicio15,if_else_ejercicio16,Aprobo_Repro,Ciclos,for_ejercicio1,for_ejercicio2,for_ejercicio3,for_ejercicio4,for_ejercicio5,
for_ejercicio6,for_ejercicio7,for_ejercicio8,for_ejercicio9,for_ejercicio10,for_ejercicio11,for_ejercicio12,for_ejercicio13,for_ejercicio14,
for_ejercicio15,for_ejercicio16,for_ejercicio17,for_ejercicio18,for_ejercicio19,for_ejercicio20
} from '../controller/Dispositivos.Controller';



const router = Router();

router.get('/Dispositivos', getDispositivos);

router.post('/Dispositivos', createNewDispositivo);

router.get('/Dispositivos/:id',getDispositivos_ID);

router.post('/Dispositivos/count',TotalDispositivos);

router.delete('/Dispositivos/:id', DeleteDispositivos_ID );

router.put('/Dispositivos/:id', updateDispositivos );


router.get('/PrimerSemana/holaMundo', holaMundo);

router.get('/PrimerSemana/lecturasVariables', lecturasVariables);

router.get('/PrimerSemana/promedio', promedio);

router.get('/PrimerSemana/alturaCono', alturaCono);

router.get('/PrimerSemana/Celsius_fahrenheit', Celsius_fahrenheit);

router.get('/SegundaSemana/Modulo', Modulo);

router.get('/SegundaSemana/Aprobo_Repro', Aprobo_Repro);

router.get('/SegundaSemana/Ciclos', Ciclos);

router.get('/Practica_IF_ELSE/ejercicio1', if_else_ejercicio1);

router.get('/Practica_IF_ELSE/ejercicio2', if_else_ejercicio2);

router.get('/Practica_IF_ELSE/ejercicio3', if_else_ejercicio3);

router.get('/Practica_IF_ELSE/ejercicio4', if_else_ejercicio4);

router.get('/Practica_IF_ELSE/ejercicio5', if_else_ejercicio5);

router.get('/Practica_IF_ELSE/ejercicio6', if_else_ejercicio6);

router.get('/Practica_IF_ELSE/ejercicio7', if_else_ejercicio7);

router.get('/Practica_IF_ELSE/ejercicio8', if_else_ejercicio8);

router.get('/Practica_IF_ELSE/ejercicio9', if_else_ejercicio9);

router.get('/Practica_IF_ELSE/ejercicio10', if_else_ejercicio10);

router.get('/Practica_IF_ELSE/ejercicio11', if_else_ejercicio11);

router.get('/Practica_IF_ELSE/ejercicio12', if_else_ejercicio12);

router.get('/Practica_IF_ELSE/ejercicio13', if_else_ejercicio13);

router.get('/Practica_IF_ELSE/ejercicio14', if_else_ejercicio14);

router.get('/Practica_IF_ELSE/ejercicio15', if_else_ejercicio15);

router.get('/Practica_IF_ELSE/ejercicio16', if_else_ejercicio16);

router.get('/Practica_For/ejercicio1', for_ejercicio1);

router.get('/Practica_For/ejercicio2', for_ejercicio2);

router.get('/Practica_For/ejercicio3', for_ejercicio3);

router.get('/Practica_For/ejercicio4', for_ejercicio4);

router.get('/Practica_For/ejercicio5', for_ejercicio5);

router.get('/Practica_For/ejercicio6', for_ejercicio6);

router.get('/Practica_For/ejercicio7', for_ejercicio7);

router.get('/Practica_For/ejercicio8', for_ejercicio8);

router.get('/Practica_For/ejercicio9', for_ejercicio9);

router.get('/Practica_For/ejercicio10', for_ejercicio10);

router.get('/Practica_For/ejercicio11', for_ejercicio11);

router.get('/Practica_For/ejercicio12', for_ejercicio12);

router.get('/Practica_For/ejercicio13', for_ejercicio13);

router.get('/Practica_For/ejercicio14', for_ejercicio14);

router.get('/Practica_For/ejercicio15', for_ejercicio15);

router.get('/Practica_For/ejercicio16', for_ejercicio16);

router.get('/Practica_For/ejercicio16', for_ejercicio17);

router.get('/Practica_For/ejercicio16', for_ejercicio18);

router.get('/Practica_For/ejercicio16', for_ejercicio19);

router.get('/Practica_For/ejercicio16', for_ejercicio20);

router.get('/tarea', tarea);

router.get('/encuesta', getEncuesta);

router.get('/proyecto', getProyecto);

export default router;
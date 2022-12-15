import express from 'express';
const router = express.Router();
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import * as configuracion from '../Controller/controlador.js';
const __dirname = dirname(fileURLToPath(import.meta.url));
export default function () {
    // router.get("/a",(req:any,res:any)=>{
    //     res.sendFile(join(__dirname,'../../public/views/inicio.html'));
    // })
    router.get("/libros", (req, res) => {
        res.sendFile(join(__dirname, '../../public/views/libros.html'));
    });
    router.get("/", configuracion.inicio);
    return router;
}
;

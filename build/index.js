import express, { json, urlencoded } from 'express';
// import poo from './bd/base_de_datos';
// @ts-ignore
import reload from 'reload';
import rutas from './router/router.js';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
// app.use("public",express.static(join(__dirname+"/../public")))
//console.log(join(__dirname,"Public"))
// console.log(join(__dirname,"/Public"))
app.set('view engine', 'pug');
app.use(express.static('public'));
app.set('views', __dirname + "/../public/views");
// app.use("/Public",express.static('/Public'))
var numero;
var hola = 2;
class numbero {
    constructor() {
    }
    letra = 5;
}
var nuevo = new numbero();
var que = { "numero": 123, "letras": "asd" };
console.log(typeof (nuevo));
console.log("holassss");
if (typeof (numbero)) {
}
app.use(json());
app.use(urlencoded({ extended: true }));
app.use('/', rutas());
app.listen(3500);
reload(app);
class uno {
}
;

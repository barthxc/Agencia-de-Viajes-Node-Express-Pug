import express from 'express';
import router from './routes/index.js';
import conectarDB from './config/db.js';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from 'path';

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Conectar a la base de datos
conectarDB();

// Definir puerto
const port = process.env.PORT || 4000;

// Habilitar PUG
app.set('view engine', 'pug');

// Configurar la ruta de las vistas
app.set('views', path.join(__dirname, 'views'));

// Obtener el año actual
app.use((req,res,next)=>{
   const year = new Date();
   res.locals.actualYear = year.getFullYear();
   res.locals.nombresitio = "Agencia de Viajes";

   next();
});

// Agregar body parser para leer los datos del formulario
app.use(express.urlencoded({ extended: true }));

// Definir la carpeta public
app.use(express.static('public'));

// Agregar router
app.use('/', router);

app.listen(port, () => {
    console.log(`El servidor está funcionando en el puerto ${port}`);
});





import { Viaje } from '../models/Viaje.js';
import { Testimonial } from '../models/Testimoniales.js';

const paginaInicio = async (req,res)=>{//req - Lo que enviamos : res- Lo que express no responde

    //Consultar 3 viajes del modelo de Viaje

    //Metemos en un array las peticiones al servidor y las llamamos de forma simultanea para pasarlo a la vista del resultado y su index
    const promiseDB = [];
    promiseDB.push(Viaje.findAll({limit:3}))
    promiseDB.push(Testimonial.findAll({limit:3}))

    try {
        const resultado = await Promise.all(promiseDB);

        res.render('inicio', {
            pagina: 'Inicio',
            clase:'home',
            viajes:resultado [0],
            testimoniales: resultado[1]
        });
        
    } catch (error) {
    console.log(error);    
    }



  
}

const paginaNosotros = (req,res)=>{
    res.render('nosotros', {
        pagina: 'Nosotros'
    });
}


const paginaViajes = async(req,res)=>{
    //Consultar base de datos
    const viajes = await Viaje.findAll();

    
    res.render('viajes', {
        pagina: 'Próximos viajes!',
        viajes
    });
}


const paginaTestimoniales = async (req,res)=>{

    try {
        const testimoniales = await Testimonial.findAll();

        res.render('testimoniales', {
            pagina: 'Testimoniales',
            testimoniales
        });
    } catch (error) {
        console.log(error);
    }
}

//Muestra un viaje por su slug (página detalle)
const paginaDetalleViaje = async (req,res) =>{
    const { slug } = req.params;


    try{
        const resultado = await Viaje.findOne({ where : {slug}});
        res.render('viaje',{
            pagina:'Información Viaje',
            resultado
        })
    }catch(error){
        console.log(error)
    }
}


export {
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimoniales,
    paginaDetalleViaje
}
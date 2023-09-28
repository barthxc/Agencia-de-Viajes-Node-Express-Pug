import Viaje from '../models/Viaje.js';
import Testimonial from '../models/Testimoniales.js';
import { testimonialSchema } from '../models/Testimoniales.js';



const paginaInicio = async (req, res) => {
    try {
        // Consultar 3 viajes desde la base de datos
        const viajes = await Viaje.find().limit(3);

        // Consultar 3 testimonios desde la base de datos
        const testimoniales = await Testimonial.find().limit(3);

        // Renderizar la vista 'inicio' con los resultados
        res.render('inicio', {
            pagina: 'Inicio',
            clase: 'home',
            viajes: viajes,
            testimoniales: testimoniales
        });

    } catch (error) {
        // Manejar errores si los hubiera
        console.log(error);
        res.status(500).send('Error interno del servidor');
    }
}





const paginaNosotros = (req,res)=>{
    res.render('nosotros', {
        pagina: 'Nosotros'
    });
}


const paginaViajes = async (req, res) => {
    try {
        // Consultar la base de datos para obtener todos los viajes
        const viajes = await Viaje.find();

        // Renderizar la vista 'viajes' con los resultados
        res.render('viajes', {
            pagina: 'Próximos viajes!',
            viajes: viajes
        });

    } catch (error) {
        // Manejar errores si los hubiera
        console.log(error);
        res.status(500).send('Error interno del servidor');
    }
}



const paginaTestimoniales = async (req, res) => {
    try {
        // Consultar la base de datos para obtener todos los testimonios
        const testimoniales = await Testimonial.find();

        // Renderizar la vista 'testimoniales' con los resultados
        res.render('testimoniales', {
            pagina: 'Testimoniales',
            testimoniales: testimoniales
        });
    } catch (error) {
        // Manejar errores si los hubiera
        console.log(error);
        res.status(500).send('Error interno del servidor');
    }
}

const paginaDetalleViaje = async (req, res) => {
    const { slug } = req.params;

    try {
        // Consultar la base de datos para encontrar un viaje por su slug
        const resultado = await Viaje.findOne({ slug: slug });

        // Renderizar la vista 'viaje' con los resultados
        res.render('viaje', {
            pagina: 'Información Viaje',
            resultado: resultado
        });
    } catch (error) {
        // Manejar errores si los hubiera
        console.log(error);
        res.status(500).send('Error interno del servidor');
    }
}


export {
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimoniales,
    paginaDetalleViaje
}
import Testimonial from '../models/Testimoniales.js';

const guardarTestimonial = async (req, res) => {
    const { nombre, correo, mensaje } = req.body;

    const errores = [];

    if (nombre.trim() === '') {
        errores.push({ mensaje: 'El nombre está vacío' });
    }

    if (correo.trim() === '') {
        errores.push({ mensaje: 'El correo está vacío' });
    }

    if (mensaje.trim() === '') {
        errores.push({ mensaje: 'El mensaje está vacío' });
    }

    if (errores.length > 0) {
        const testimoniales = await Testimonial.find();

        res.render('testimoniales', {
            pagina: 'Testimoniales',
            errores,
            nombre,
            correo,
            mensaje,
            testimoniales
        });
    } else {
        try {
            await Testimonial.create({
                nombre,
                correo,
                mensaje
            });
            res.redirect('/testimoniales');
        } catch (error) {
            console.log(error);
            res.status(500).send('Error interno del servidor');
        }
    }
}

export {
    guardarTestimonial
}

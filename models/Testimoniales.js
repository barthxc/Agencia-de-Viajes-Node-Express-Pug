import mongoose from 'mongoose';

export const testimonialSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    correo: {
        type: String,
        required: true
    },
    mensaje: {
        type: String,
        required: true
    }
});

const Testimonial = mongoose.model('Testimonial', testimonialSchema);

export default Testimonial;

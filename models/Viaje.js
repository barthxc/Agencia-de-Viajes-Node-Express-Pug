import mongoose from 'mongoose';

export const viajeSchema = new mongoose.Schema({
    titulo: String,
    precio: String,
    fecha_ida: Date,
    fecha_vuelta: Date,
    imagen: String,
    descripcion: String,
    disponibles: String,
    slug: String
});

const Viaje = mongoose.model('Viaje', viajeSchema);

export default Viaje;

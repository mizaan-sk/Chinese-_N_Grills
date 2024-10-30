
import mongoose from 'mongoose'

const reservationSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },  
    persons: { type: Number, required: true },
    occasion: { type: String, required: true },
    dining: { type: String, required: true },
    date: { type: Date, required: true }
});


const reservationModel = mongoose.models.reservation || mongoose.model("reservation", reservationSchema);

export default reservationModel;

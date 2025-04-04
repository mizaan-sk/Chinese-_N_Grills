import express from 'express';
import { getReservations, reserveTable } from '../controllers/reservationController.js';


const reservationRouter = express.Router()
reservationRouter.post("/table",reserveTable)
reservationRouter.get('/tabledata', getReservations);
export default reservationRouter;
import express from 'express';
import { reserveTable } from '../controllers/reservationController.js';


const reservationRouter = express.Router()

reservationRouter.post("/table",reserveTable)
export default reservationRouter;
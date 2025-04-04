import express from 'express';
import { DeliveryBillEmail } from '../controllers/DeliveryController.js';


const DeliveryBillRouter = express.Router();

DeliveryBillRouter.post('/bill',DeliveryBillEmail);
export default DeliveryBillRouter;
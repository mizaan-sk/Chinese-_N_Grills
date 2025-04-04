import express from 'express';
import { SendingBillEmail } from '../controllers/SendingBill.js';

const BillRouter = express.Router();

BillRouter.post('/sendBill', SendingBillEmail);
export default BillRouter;
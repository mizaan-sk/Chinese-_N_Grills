import express from 'express';
import { sendReferEmail } from '../controllers/referEmailController.js';

const ReferEmailRouter = express.Router();

ReferEmailRouter.post('/mail', sendReferEmail);

export default ReferEmailRouter;

import express from 'express';

import { Forgotpassword, ResetPassword } from '../controllers/forgotpasswordController.js';

const forgotpasswordRouter = express.Router();

forgotpasswordRouter.post("/forgotpassword", Forgotpassword);
forgotpasswordRouter.post("/reset-password/:id/:token",ResetPassword );

export default forgotpasswordRouter;

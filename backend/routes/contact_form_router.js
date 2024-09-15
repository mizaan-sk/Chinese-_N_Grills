import express from 'express';
import Contact_Form from '../controllers/contactcontroller.js';
const contact_form_router = express.Router()
contact_form_router.post("/",Contact_Form)
export default contact_form_router
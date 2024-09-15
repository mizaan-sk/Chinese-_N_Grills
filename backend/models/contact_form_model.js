import mongoose from 'mongoose';

// Define the contact form schema
const contact_form_Schema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  message: { type: String, required: true },
});

// Create the model or retrieve the existing one
const contact_form_model = mongoose.models.contact_form || mongoose.model("contact_form", contact_form_Schema);

export default contact_form_model;

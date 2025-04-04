import express from "express";
import cors from 'cors';
import { ConnectDB } from "./config/db.js";
import foodRouter from "./routes/foodRouter.js";
import userRouter from "./routes/UserRoutes.js";
import 'dotenv/config'
import CartRouter from "./routes/CartRouter.js";
import orderRouter from "./routes/orderRoute.js";
import forgotpasswordRouter from "./routes/forgotpassworRouter.js";
import ReferEmailRouter from './routes/ReferEmail.js'
import contact_form_router from "./routes/contact_form_router.js";
import reservationRouter from "./routes/ReservationRouter.js";
import BillRouter from "./routes/SendingBillRoute.js";
import DeliveryBillRouter from "./routes/DeliveryBill.js";
import path from 'path';
import { fileURLToPath } from 'url';

//app config
const app = express();
const port =process.env.PORT || 5000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
//middleware
app.use(express.json());
app.use(cors()); //using this we can access backend from frontend

//db connection
ConnectDB()

//api endpoints
app.use('/api/food',foodRouter)
app.use('/images',express.static('uploads'))
app.use('/api/user',userRouter)
app.use('/api/cart',CartRouter)
app.use('/api/order',orderRouter)
app.use("/user",forgotpasswordRouter)
app.use("/refer",ReferEmailRouter)
app.use("/contact",contact_form_router)
app.use("/reservation",reservationRouter)
app.use("/api/bill",BillRouter)
app.use('/api/delivery',DeliveryBillRouter)

// app.get("/", (req, res) => {
//     res.send("API Working");
// });
app.use(express.static(path.join(__dirname, '../frontend/dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/dist/index.html'));
});
app.listen(port, () => {
    console.log(`Server starting at port http://localhost:${port}`);
});
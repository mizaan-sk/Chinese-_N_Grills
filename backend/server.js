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



//app config
const app = express();
const port = 5000;

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






app.get("/", (req, res) => {
    res.send("API Working");
});
app.listen(port, () => {
    console.log(`Server starting at port http://localhost:${port}`);
});
//mongodb+srv://mizaan:7208151615@cluster0.vmtq1wk.mongodb.net/?






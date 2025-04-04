import orderModel from "../models/orderModel.js";
import usermodel from "../models/usermodel.js";  // Correcting the case of userModel import
import Stripe from "stripe";

// Placing order from frontend
const placeOrder = async (req, res) => {
    try {
        // Create a new order using the request body
        const newOrder = new orderModel({
            userId: req.body.userId,
            items: req.body.items,
            amount: req.body.amount,
            address: req.body.address
        });
        await newOrder.save();

        // Clear user's cart data after placing the order
        await usermodel.findByIdAndUpdate(req.body.userId, { cartdata: {} });

        // Respond with success and the newly created order details
        res.json({ success: true, order: newOrder });
    } catch (error) {
        console.error(error);
        res.json({ success: false, message: "Error placing order" });
    }
};

const verifyOrder = async (req, res) => {
    const { orderId, success } = req.body;
    try {
        if (success === "true") {
            await orderModel.findByIdAndUpdate(orderId, { payment: true });
            res.json({ success: true, message: "Paid" });
        } else {
            await orderModel.findByIdAndDelete(orderId);
            res.json({ success: false, message: "Not Paid" });
        }
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" });
    }
};

const UserOrders = async (req, res) => {
    try {
        const orders = await orderModel.find({ userId: req.body.userId });
        res.json({ success: true, data: orders })
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: "Error" })
    }
}

const listOrders = async (req, res) => {
    try {
        const order = await orderModel.find({})
        res.json({ success: true, data: order })
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: "ERROR" })
    }
}
//update food status on frontend

const UpdateStatus =async (req,res) =>{
try {
    await orderModel.findByIdAndUpdate(req.body.orderId,{status:req.body.status})
    res.json({success:true,message:"Status Updated"})
} catch (error) {
    console.log(error)
    res.json({success:false,message:"Error"})
}
}
export { placeOrder, verifyOrder, UserOrders, listOrders ,UpdateStatus};


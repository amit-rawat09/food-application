import express from 'express'
import authMiddleware from '../middleware/auth.js'
import { listOrder, placeorder, updateStatus, usersOrder, verifyOrder } from '../controllers/orderController.js'

const orderRouter = express.Router();
orderRouter.post("/place", authMiddleware, placeorder)
orderRouter.post("/verify", verifyOrder)
orderRouter.post("/userorders", authMiddleware, usersOrder)
orderRouter.get("/list", listOrder)
orderRouter.post("/status", updateStatus)


export default orderRouter; 
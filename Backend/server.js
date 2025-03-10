import express from 'express'
import cors from 'cors'
import { connectDB } from './Config/db.js'
import foodRouter from './routes/foodRoute.js'
import userRouter from './routes/userRoutes.js'
import 'dotenv/config'
import cartRouter from './routes/cartRoute.js'
import orderRouter from './routes/orderRoute.js'

//app config
const app = express()
const port = process.env.PORT || 400

//middleware
app.use(express.json())
app.use(cors())

// db Connection
connectDB()

// api endpoints
app.use("/api/food", foodRouter)
app.use("/images", express.static('uploads'))
app.use("/api/user", userRouter)
app.use("/api/cart", cartRouter)
app.use('/api/order', orderRouter)

app.get('/', (req, res) => {
    res.send("API WORKING")
})

app.listen(port, () => {
    console.log(`App is running on http://localhost:${port}`);
})
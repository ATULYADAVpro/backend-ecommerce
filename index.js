import express from 'express'
import { PORT } from './config/index.js'
import connectDB from './utils/db.js'
import handleError from './middlewares/handleError.js'
import productRouter from './routes/product/productRoutes.js'
import categoriesRouter from './routes/categoris/categoriesRouter.js'
const app = express()


// -------- middleware --------
app.use(express.json())
app.use('/api/product',productRouter)
app.use('/api/categories',categoriesRouter)


app.get("/", (req, res) => {
    res.send("<h1>Server started!</h1>")
})


// ------- Global Middleware -------
app.use(handleError)

app.listen(PORT, () => {
    connectDB()
    console.log(`\n ========= server start at http://localhost:${PORT} ===========`)
})
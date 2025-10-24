import express from 'express'
import { PORT } from './config/index.js'
import connectDB from './utils/db.js'
const app = express()




app.get("/", (req, res) => {
    res.send("<h1>Server started!</h1>")
})

app.listen(PORT, () => {
    connectDB()
    console.log(`\n ========= server start at http://localhost:${PORT} ===========`)
})
import { connect } from 'mongoose'
import { DB_URL } from '../config/index.js'

async function connectDB() {
    try {
        await connect(DB_URL)
        console.log(`\n ==========  database connected success ===========`)
    } catch (error) {
        console.log(`database failed : ${error.message}`)
    }
}

export default connectDB
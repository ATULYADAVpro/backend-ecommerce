import { Schema, model } from 'mongoose'

const productSchema = new Schema({
    productName: {
        type: String,
        required: true
    },
    productImg: {
        type: String,
        // required: true
    },
    productDescription: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    offer: {
        type: Number,
        required: true
    },
    offerprice: {
        type: Number,
        // required: true
    },
    saveprice: {
        type: Number,
        // required: true
    },
    details: {
        type: String,
    },
    categories: {
        type: String,
    },
})
const Product = model("Product", productSchema)
export default Product;
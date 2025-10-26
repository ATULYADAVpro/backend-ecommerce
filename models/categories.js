import { Schema, model } from 'mongoose'

const categoriesSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    code: {
        type: Number,
        required: true,
        unique: true
    },

})

const Categories = model("Categorie", categoriesSchema)
export default Categories;
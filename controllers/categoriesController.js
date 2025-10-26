import Categories from "../models/categories.js";
import ErrorHandler from "../utils/ErrorHandler.js";

const categoriesController = {
    async add(req, res, next){
        console.log("working add")
        const { name, code } = req.body;
        

        try {
            if (!name || typeof code !== 'number') { return next(ErrorHandler.requiredAllFiled(400,"working")) }
            const data = new Categories({
                name,
                code
            })
            await data.save()
            res.status(200).json(data)
        } catch (error) {
            return next(error)
        }
    }
}

export default categoriesController;
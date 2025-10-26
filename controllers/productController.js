import Product from "../models/product.js";
import ErrorHandler from "../utils/ErrorHandler.js";

const productController = {
    async testRoutes(req, res) {
        res.send("working")
    },
    async addProduct(req, res, next) {
        const { productName, productDescription, price, offer, details, categories } = req.body;
        try {


            // ------------- Validate -----------
            if (
                !productName ||
                !productDescription ||
                typeof price !== 'number' ||
                typeof offer !== 'number' ||
                !categories
            ) {
                return next(ErrorHandler.requiredAllFiled());
            }




            // -------- Save Data -------
            const offerprice = price * (offer / 100);
            const saveprice = price - offerprice;

            const data = new Product({
                productName,
                productDescription,
                price,
                offer,
                details,
                categories,
                offerprice,
                saveprice
            });


            await data.save()
            //---------- response -------

            res.status(200).json({
                massage: "Product Add Successfull",
                success: true
            })


        } catch (error) {
            return next(error)
        }
    },
}

export default productController
import {Router} from 'express'  
import productController from '../../controllers/productController.js'
const productRouter = Router()

productRouter.get('/test',productController.testRoutes)
productRouter.post('/add',productController.addProduct)

export default productRouter;
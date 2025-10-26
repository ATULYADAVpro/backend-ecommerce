import { Router } from 'express'
import categoriesController from '../../controllers/categoriesController.js';
const categoriesRouter = Router();

categoriesRouter.post('/add', categoriesController.add)

export default categoriesRouter;
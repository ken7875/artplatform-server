import express from 'express'
import products from './productsRoute'

const router = express.Router();

router.use('/products', products)

export default router
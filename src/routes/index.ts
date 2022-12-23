import express from 'express'
import products from './productsRoute'
import artists from './artistsRoute'

const router = express.Router();

router.use('/products', products)
router.use('/artists', artists)

export default router
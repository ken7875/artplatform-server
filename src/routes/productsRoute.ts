import express from 'express'
import * as product from '../controllers/productsController'

const router = express.Router()

router.get('/ranking', product.getRankingProducts)
router.get('/newest', product.getNewestProducts)

export default router
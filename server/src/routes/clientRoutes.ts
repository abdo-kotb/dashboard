import { Router } from 'express'

import { getProducts, getCustomers } from '../controllers/clientControllers.js'

const router = Router()

router.get('/products', getProducts)
router.get('/customers', getCustomers)

export default router

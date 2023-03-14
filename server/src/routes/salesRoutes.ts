import { Router } from 'express'

import { getSales } from '../controllers/salesControllers.js'

const router = Router()

router.get('/sales', getSales)

export default router

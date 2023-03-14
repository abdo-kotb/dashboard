import { Router } from 'express'

import {
  getDashboardStats,
  getUser,
} from '../controllers/generalControllers.js'

const router = Router()

router.get('/user/:id', getUser)
router.get('/dashboard', getDashboardStats)

export default router

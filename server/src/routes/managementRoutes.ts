import { Router } from 'express'

import {
  getAdmins,
  getUserPerformance,
} from '../controllers/managementControllers.js'

const router = Router()

router.get('/admins', getAdmins)
router.get('/performance/:id', getUserPerformance)

export default router

import { Router } from 'express'

import { getAdmins } from '../controllers/managementControllers.js'

const router = Router()

router.get('/admins', getAdmins)

export default router

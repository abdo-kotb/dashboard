import { Router } from 'express'

import { getUser } from '../controllers/generalControllers.js'

const router = Router()

router.get('/uesr/:id', getUser)

export default router

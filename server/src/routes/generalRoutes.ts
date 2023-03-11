import { Router } from 'express'

import { getUser } from '../controllers/generalControllers.js'

const router = Router()

router.get('/user/:id', getUser)

export default router

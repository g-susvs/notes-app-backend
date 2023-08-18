import { Router } from 'express'
import { userCtrl } from './dependencies'

const router = Router()

router.post('/new', userCtrl.register)
router.post('/login', userCtrl.login)

export default router
import { Router } from 'express'
import { noteCtrl } from './dependencies'

const router = Router()

router.get('/:id', noteCtrl.getById)
router.get('/', noteCtrl.getAll)
router.post('/', noteCtrl.insert)

export default router
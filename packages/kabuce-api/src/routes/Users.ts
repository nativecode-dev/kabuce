import { Request, Response, Router } from 'express'
import { BAD_REQUEST, CREATED, OK } from 'http-status-codes'
import { ParamsDictionary } from 'express-serve-static-core'

import UserDao from '@daos/User/UserDao.mock'
import { paramMissingError } from '@shared/constants'
import { UserRoles } from '@entities/User'
import { adminMW } from './middleware'

// Init shared
const router = Router().use(adminMW)
const userDao = new UserDao()

router.get('/all', async (req: Request, res: Response) => {
  const users = await userDao.getAll()
  return res.status(OK).json({ users })
})

router.post('/add', async (req: Request, res: Response) => {
  // Check parameters
  const { user } = req.body
  if (!user) {
    return res.status(BAD_REQUEST).json({
      error: paramMissingError,
    })
  }
  // Add new user
  user.role = UserRoles.Standard
  await userDao.add(user)
  return res.status(CREATED).end()
})

router.put('/update', async (req: Request, res: Response) => {
  // Check Parameters
  const { user } = req.body
  if (!user) {
    return res.status(BAD_REQUEST).json({
      error: paramMissingError,
    })
  }
  // Update user
  user.id = Number(user.id)
  await userDao.update(user)
  return res.status(OK).end()
})

router.delete('/delete/:id', async (req: Request, res: Response) => {
  const { id } = req.params as ParamsDictionary
  await userDao.delete(Number(id))
  return res.status(OK).end()
})

export default router

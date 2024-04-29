
import { createAction } from '@reduxjs/toolkit'
import { UserModel } from '../models'

export const setCurrentUser = createAction<UserModel | null>('user/setCurrent')
export const initState = createAction<UserModel | null>('user/initState')

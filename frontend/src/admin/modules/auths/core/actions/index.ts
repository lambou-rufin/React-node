
import { createAction } from '@reduxjs/toolkit'
import { IUser } from '../models'

export const setCurrentUser = createAction<IUser | null>('user/setCurrent')
export const initState = createAction<IUser | null>('user/initState')



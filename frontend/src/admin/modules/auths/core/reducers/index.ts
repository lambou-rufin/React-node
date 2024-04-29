
import { createReducer } from '@reduxjs/toolkit'
import { IAppState } from '../models'
import { initState, setCurrentUser } from '../actions'

const initialState: IAppState = {
  currentUser: null,
}

export const userReducer = createReducer(initialState.currentUser, (builder) => {
  return builder
    .addCase(setCurrentUser, (_state, action) => {
      return action.payload
    })
    .addCase(initState, () => {
      return null
    })
})

import { configureStore } from '@reduxjs/toolkit'
import unrolledEventsReducer from '../modules/event/components/details/components/Session/components/detailSession/components/Unrolled/core/reducers'
import sessionsReducer from '../modules/event/components/details/components/Session/core/reducers'
import unrolledTypeEventsReducer from '../modules/event/components/type/components/DetailsEvent/components/Unrolled/core/reducers'
import typeEventReducer from '../modules/event/components/type/core/reducers'
import eventReducer from '../modules/event/core/reducers'
import personReducer from '../modules/personn/core/reducers'
import processReducer from '../modules/process/core/reducers'
import songsReducer from '../modules/song/core/reducers'
import { userReducer } from '../modules/auths/core/reducers'

export const store = configureStore({
  reducer: {
    user: userReducer,
    bill: billReducer,
    categorie: categorieReducer,
    dashboard: dashboardReducer,
    produit: produitReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

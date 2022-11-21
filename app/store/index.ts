import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { postApi } from './posts'

const rootReducers = combineReducers({
   [postApi.reducerPath]: postApi.reducer,
})

export const setupStore = () => {
   return configureStore({
      reducer: rootReducers,
      middleware: (getDefaultMiddleware) =>
         getDefaultMiddleware().concat(postApi.middleware)

   })
}

export type TypeRootState = ReturnType<typeof rootReducers>
export type AppStore = ReturnType<typeof setupStore>
export type TypeDispatch = AppStore['dispatch']

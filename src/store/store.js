import { configureStore } from '@reduxjs/toolkit'
import { catalogApi } from '../services/catalog'
import { userApi } from '../services/user'
import userReducer from './slices/user'
import filterReducer from './slices/filter'

export const store = configureStore({
  reducer: {
    user: userReducer,
    filter: filterReducer,
    [userApi.reducerPath]: userApi.reducer,
    [catalogApi.reducerPath]: catalogApi.reducer,
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([userApi.middleware, catalogApi.middleware]),
})

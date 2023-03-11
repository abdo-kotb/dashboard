import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import api from './api'
import globalReducer from './globalState'

const store = configureStore({
  reducer: {
    [globalReducer.name]: globalReducer.reducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(api.middleware),
})

setupListeners(store.dispatch)

type AppStore = typeof store
export type AppState = ReturnType<AppStore['getState']>

export default store

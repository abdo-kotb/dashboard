import { configureStore } from '@reduxjs/toolkit'
import globalReducer from './globalState'

const store = configureStore({
  reducer: {
    [globalReducer.name]: globalReducer.reducer,
  },
})

type AppStore = typeof store
export type AppState = ReturnType<AppStore['getState']>

export default store

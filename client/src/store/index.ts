import { configureStore } from '@reduxjs/toolkit'
import globalState from './globalState'

const store = configureStore({
  reducer: {
    [globalState.name]: globalState,
  },
})

type AppStore = typeof store
export type AppState = ReturnType<AppStore['getState']>

export default store

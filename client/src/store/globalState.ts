import { createSlice } from '@reduxjs/toolkit'

interface InitialState {
  mode: 'dark' | 'light'
}

const initialState: InitialState = {
  mode: 'dark',
}

export const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    setMode: state => {
      state.mode = state.mode === 'light' ? 'dark' : 'light'
    },
  },
})

export const { setMode } = globalSlice.actions

export default globalSlice.reducer

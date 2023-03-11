import { createSlice } from '@reduxjs/toolkit'

interface InitialState {
  mode: 'dark' | 'light'
  userId: string
}

const initialState: InitialState = {
  mode: 'dark',
  userId: '63701ccf03239b7f700000e',
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

export default globalSlice

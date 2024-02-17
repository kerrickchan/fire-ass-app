import { configureStore } from '@reduxjs/toolkit'
import { counterSlice } from '../slices'

export const rootStore = configureStore({
  reducer: counterSlice.reducer
})

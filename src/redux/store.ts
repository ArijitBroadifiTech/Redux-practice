import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './slices/counter'
import toggleSlice from './slices/toggle'



export const store = configureStore({
  reducer: {
    counter: counterSlice,
    toggle: toggleSlice
  },
})


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch 
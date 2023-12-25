import { configureStore } from '@reduxjs/toolkit'
import userReducer from './slices/userSlide'

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
})  
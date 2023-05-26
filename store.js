import { configureStore } from '@reduxjs/toolkit'
import addTocartReducer from '../features/addToCart/addToCartSlice'

export const store = configureStore({
  reducer: {
    counter: addTocartReducer,
  },
})
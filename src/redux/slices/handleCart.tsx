import { createSlice } from '@reduxjs/toolkit'
import { ProductProps, ProductsDataProps } from '../types'

const initialState: ProductsDataProps = {
  productsData: [],
}

export const cartSlice = createSlice({
  name: 'cartSlice',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.productsData.push(action.payload)
    },
    removeFromCart: (state, action) => {
      state.productsData = state.productsData.filter(
        (productData: ProductProps) =>
          productData?.size.id !== action.payload.size.id,
      )
    },
    increaseCount: (state: any, action) => {
      const { productsData } = state
      const existingProduct = productsData.find(
        (productData: ProductProps) =>
          productData?.size.id === action.payload.size.id,
      )

      if (existingProduct) {
        existingProduct.quantity++
      }
    },
    decreaseCount: (state: any, action) => {
      const { productsData } = state
      const existingProduct = productsData.find(
        (productData: ProductProps) =>
          productData?.size.id === action.payload.size.id,
      )

      if (existingProduct && existingProduct.quantity > 1) {
        existingProduct.quantity--
      } else if (existingProduct && existingProduct.quantity === 1) {
        state.productsData = state.productsData.filter(
          (productData: ProductProps) =>
            productData?.size.id !== action.payload.size.id,
        )
      }
    },
    clearCart: (state) => {
      state.productsData = []
    },
  },
})

export const {
  addToCart,
  removeFromCart,
  increaseCount,
  decreaseCount,
  clearCart,
} = cartSlice.actions

export default cartSlice.reducer

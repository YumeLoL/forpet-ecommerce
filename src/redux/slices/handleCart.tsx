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
      console.log('state', state)
      console.log('action', action)

      const existingProduct = state.productsData.find(
        (productData: ProductProps) => productData?.id === action.payload.id,
      )

      if (existingProduct) {
        existingProduct.quantity += action.payload.quantity
      } else {
        state.productsData.push(action.payload)
      }
    },
    removeFromCart: (state, action) => {
      const existingProduct = state.productsData.find(
        (productData: ProductProps) => productData?.id === action.payload,
      )
      if (existingProduct) {
        state.productsData = state.productsData.filter(
          (productData: ProductProps) => productData.id !== existingProduct.id,
        )
      }
    },
    increaseCount: (state: any, action) => {
      const existingProduct = state.productsData.find(
        (productData: ProductProps) => productData?.id === action.payload.id,
      )
      console.log('redux', existingProduct)
      if (existingProduct) {
        existingProduct.quantity++
      }
    },
    decreaseCount: (state: any, action) => {
      const existingProduct = state.productsData.find(
        (productData: ProductProps) => productData?.id === action.payload.id,
      )
      if (existingProduct && existingProduct.quantity > 1) {
        existingProduct.quantity--
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

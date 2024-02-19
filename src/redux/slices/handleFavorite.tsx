import { createSlice } from '@reduxjs/toolkit'
import { FavoritesDataProps, ProductProps } from '../types'

const initialState: FavoritesDataProps = {
  favoritesData: [],
}

export const favoriteSlice = createSlice({
  name: 'favoriteSlice',
  initialState,
  reducers: {
    addToWishList: (state, action) => {
      const existingProduct = state.favoritesData.find(
        (productData: ProductProps) => productData?.id === action.payload.id,
      )
      if (existingProduct) {
        existingProduct.quantity += action.payload.quantity
      } else {
        state.favoritesData.push(action.payload)
      }

      localStorage.setItem('favorites', JSON.stringify(state.favoritesData))
    },
    removeFromWishList: (state, action) => {
      const existingProduct = state.favoritesData.find(
        (productData: ProductProps) => productData?.id === action.payload,
      )
      if (existingProduct) {
        state.favoritesData = state.favoritesData.filter(
          (productData: ProductProps) => productData.id !== existingProduct.id,
        )
      }
      localStorage.setItem('favorites', JSON.stringify(state.favoritesData))
    },
    clearWishList: (state) => {
      state.favoritesData = []
      localStorage.setItem('favorites', JSON.stringify(state.favoritesData))
    },
  },
})

export const { addToWishList, removeFromWishList, clearWishList } =
  favoriteSlice.actions

export default favoriteSlice.reducer

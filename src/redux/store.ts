import { configureStore, createSlice } from "@reduxjs/toolkit"
import {  Cart, Game, State } from "../schemas"


const initialState = {
    gamesList: [] as Game[],
    cart: [] as Cart[],
    totalPrice: 0,
    totalQuantity: 0,
    isCartVisible: false,
    isLoaded: false,
} as State


const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    loadList(state, action) {
      state.gamesList = action.payload.gamesList;
      state.isLoaded = action.payload.isLoaded;
    },
    addGameToCart(state, action) {
      const gameIndex = state.cart.findIndex((g) => g.id === action.payload.id)
        
        if(gameIndex === -1) {
          state.cart.push({...action.payload, amount: 1})
        } else {
          state.cart[gameIndex].amount++        
        }
    },
    removeGameFromCart(state, action) {
      const gameIndex = state.cart.findIndex((g) => g.id === action.payload)
      state.cart[gameIndex].amount--

      if(state.cart[gameIndex].amount === 0) {
        state.cart = state.cart.filter(g => g.id !== action.payload)

          if(state.totalQuantity === 1) {
            state.isCartVisible = false
          }
      }
    },
    toggleCartVisibility(state) {
      if(state.totalQuantity > 0) 
      state.isCartVisible = !state.isCartVisible
    },
    recalculatePrice(state) {
      state.totalQuantity = state.cart.map((g) => {
        return g.amount
      }).reduce((acc, el) => acc + el, 0)

      state.totalPrice = state.cart.map((g) => {
        return g.amount * g.price
      }).reduce((acc, el) => acc + el, 0)
    },
  }
})

const store = configureStore({
  reducer: cartSlice.reducer
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export const cartActions = cartSlice.actions;

export default store;
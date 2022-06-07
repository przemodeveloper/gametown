import { createSlice } from "@reduxjs/toolkit"
import { Cart } from "../schemas"

const initialCartState = {
    cart: [] as Cart[],
    totalPrice: 0,
    totalQuantity: 0,
    isCartVisible: false,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialCartState,
    reducers: {
      addGameToCart(state, action) {
        const gameIndex = state.cart.findIndex((g) => g.id === action.payload.id)
        state.totalQuantity++
          
          if(gameIndex === -1) {
            state.cart.push({...action.payload, quantity: 1, totalPrice: action.payload.price})
          } else {
            state.cart[gameIndex].quantity++
            state.cart[gameIndex].totalPrice = state.cart[gameIndex].totalPrice + action.payload.price
          }
      },
      removeGameFromCart(state, action) {
        const gameIndex = state.cart.findIndex((g) => g.id === action.payload)
        state.totalQuantity--
  
        if(state.cart[gameIndex].quantity === 1) {
          state.cart = state.cart.filter(g => g.id !== action.payload)
  
            if(state.totalQuantity === 0) {
              state.isCartVisible = false
            }
        } else {
          state.cart[gameIndex].quantity--;
          state.cart[gameIndex].totalPrice = state.cart[gameIndex].totalPrice - state.cart[gameIndex].price;
        }
      },
      toggleCartVisibility(state) {
        if(state.totalQuantity > 0) 
        state.isCartVisible = !state.isCartVisible
      },
    }
  })

  export default cartSlice.reducer

  export const cartActions = cartSlice.actions;
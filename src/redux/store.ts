import { configureStore } from "@reduxjs/toolkit"
import { cartSlice } from "./cartSlice";
import { gamesListSlice } from "./gamesListSlice";

const store = configureStore({
  reducer: { cart: cartSlice.reducer, gamesList: gamesListSlice.reducer }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export const cartActions = cartSlice.actions;
export const gamesListActions = gamesListSlice.actions;

export default store;
import { configureStore } from "@reduxjs/toolkit"
import cartSliceReducer from "./cartSlice";
import gamesListSliceReducer  from "./gamesListSlice";

const store = configureStore({
  reducer: { cart: cartSliceReducer, gamesList: gamesListSliceReducer }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store;
import { createStore, applyMiddleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import thunkMiddleware from "redux-thunk"
import { Action, Game, State } from "../schemas"
import { ADD_GAME_TO_CART, LOAD_GAMES, RECALCULATE_PRICE, RECALCULATE_QUANTITY, REMOVE_SINGLE_GAME_FROM_CART, TOGGLE_CART_VISIBILITY } from "./actionTypes"

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))

const initialState = {
    gamesList: [] as Game[],
    cart: [] as Game[],
    totalPrice: 0 as Number,
    totalQuantity: 0 as Number,
    isCartVisible: false as Boolean,
    isLoaded: false,
} as State


const gameReducer = (state = initialState, action: Action) => {
    if(action.type === LOAD_GAMES) {

      const loadedGames = [] as Game[]
  
      for(const key in action.payload) {
        loadedGames.push({
          id: key,
          title: action.payload[key].title,
          description: action.payload[key].description,
          price: action.payload[key].price,
          image: action.payload[key].image,
          amount: 0
        })
      }

      return {...state, gamesList: loadedGames, isLoaded: true}
    }

    if(action.type === ADD_GAME_TO_CART) {
        const updatedCart = [...state.cart]  as Game[]

        const gameIndex = updatedCart.findIndex((g) => g.id === action.payload.id)
          
          if(gameIndex === -1) {
            updatedCart.push({...action.payload, amount: 1})
          } else {
            updatedCart[gameIndex].amount++        
          }

          const updatedPrice = Number(updatedCart.map((g) => {
            return g.amount * g.price
          }).reduce((acc, el) => acc + el, 0).toFixed(2))

          const updatedQuantity = updatedCart.map((g) => {
            return g.amount
          }).reduce((acc, el) => acc + el, 0)

         return {...state, cart: updatedCart, totalPrice: updatedPrice, totalQuantity: updatedQuantity}
    }

    if(action.type === REMOVE_SINGLE_GAME_FROM_CART) {

        let updatedCart = [...state.cart] as Game[]
        const gameIndex = updatedCart.findIndex((g) => g.id === action.payload)
        updatedCart[gameIndex].amount--

        if(updatedCart[gameIndex].amount === 0) {
            updatedCart = updatedCart.filter(g => g.id !== action.payload)
        }

          return {...state, cart: updatedCart }

    }

    if(action.type === TOGGLE_CART_VISIBILITY) {
        const updatedState = {...state}
        if(state.totalQuantity > 0) 
          return {...state, isCartVisible: !updatedState.isCartVisible}
    }

    if(action.type === RECALCULATE_PRICE) {
      const updatedCart = [...state.cart]

      const updatedPrice = Number(updatedCart.map((g) => {
        return g.amount * g.price
      }).reduce((acc, el) => acc + el, 0).toFixed(2))

      return {...state, totalPrice: updatedPrice}
    } 


    if(action.type === RECALCULATE_QUANTITY) {
      const updatedCart = [...state.cart]

      const updatedQuantity = updatedCart.map((g) => {
        return g.amount
      }).reduce((acc, el) => acc + el, 0)

      return {...state, totalQuantity: updatedQuantity}
    } 

    return state
}

const store = createStore(gameReducer, composedEnhancer)

export default store;
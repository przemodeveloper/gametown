import { createStore, applyMiddleware, Dispatch } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import thunkMiddleware from "redux-thunk"


export interface Game {
    id: string,
    title: string,
    description: string,
    price: number,
    amount: number,
    image: string
}

export interface State {
    gamesList: Game[],
    cart: Game[],
    totalPrice: number,
    totalQuantity: number,
    isCartVisible: boolean
}

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))

const initialState = {
    gamesList: [
        {
            id: 'asd',
            title: "Sifu",
            description:
              "Third person action game featuring intense hand-to-hand combat",
            price: 29.99,
            amount: 0,
            image: "https://i.iplsc.com/sifu/000EILQDE225H421-C122-F4.jpg",
          },
          {
            id: "sad",
            title: "Elden Ring",
            description:
              "Rise, Tarnished, and be guided by grace to brandish the power of the Elden Ring",
            price: 12.89,
            amount: 0,
            image:
              "https://image.api.playstation.com/vulcan/ap/rnd/202107/1612/Y5RHNmzAtc6sRYwZlYiKHAxN.png",
          },
    ] as Game[],
    cart: [] as Game[],
    totalPrice: 0 as Number,
    totalQuantity: 0 as Number,
    isCartVisible: false as Boolean,
} as State


const gameReducer = (state = initialState, action: any) => {
    if(action.type === "LOAD_GAMES") {
      return {...state, gamesList: action.payload}
    }

    if(action.type === "ADD_GAME_TO_CART") {
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

    if(action.type === "REMOVE_SINGLE_GAME_FROM_CART") {

        let updatedCart = [...state.cart] as Game[]
        const gameIndex = updatedCart.findIndex((g) => g.id === action.payload)
        updatedCart[gameIndex].amount--

        if(updatedCart[gameIndex].amount === 0) {
            updatedCart = updatedCart.filter(g => g.id !== action.payload)
        }

        const updatedPrice = Number(updatedCart.map((g) => {
            return g.amount * g.price
          }).reduce((acc, el) => acc + el, 0).toFixed(2))

          const updatedQuantity = updatedCart.map((g) => {
            return g.amount
          }).reduce((acc, el) => acc + el, 0)

          return {...state, cart: updatedCart, totalPrice: updatedPrice, totalQuantity: updatedQuantity}

    }

    if(action.type === "TOGGLE_CART_VISIBILITY") {
        const updatedState = {...state}
        if(state.totalQuantity > 0) 
          return {...state, isCartVisible: !updatedState.isCartVisible}
    }


    return state
}

export const fetchGames = async (dispatch: Dispatch) => {
  const response = await fetch("https://gametown-f29a0-default-rtdb.firebaseio.com/games.json")
  const data = await response.json()

  const loadedGames = [] as Game[]

        for(const key in data) {
          loadedGames.push({
            id: key,
            title: data[key].title,
            description: data[key].description,
            price: data[key].price,
            image: data[key].image,
            amount: 0
          })
        }


  dispatch({type: 'LOAD_GAMES', payload: loadedGames })
} 

const store = createStore(gameReducer as any, composedEnhancer)

export default store;
import store from "./redux/store"

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
    isCartVisible: boolean,
    isLoaded: boolean
}

export interface LOAD_GAMES {
    type: "LOAD_GAMES",
    payload: Game[]
}

export interface ADD_GAME_TO_CART {
    type: "ADD_GAME_TO_CART",
    payload: Game
}

export interface REMOVE_SINGLE_GAME_FROM_CART {
    type: "REMOVE_SINGLE_GAME_FROM_CART",
    payload: string
}

export interface TOGGLE_CART_VISIBILITY {
    type: "TOGGLE_CART_VISIBILITY"
}

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export type Action = LOAD_GAMES | ADD_GAME_TO_CART | REMOVE_SINGLE_GAME_FROM_CART | TOGGLE_CART_VISIBILITY
export interface Game {
    id: string,
    title: string,
    description: string,
    price: number,
    image: string
}

export interface Cart {
    id: string,
    title: string,
    description: string,
    price: number,
    amount: number,
    image: string
}

export interface State {
    gamesList: Game[],
    cart: Cart[],
    totalPrice: number,
    totalQuantity: number,
    isCartVisible: boolean,
    isLoaded: boolean
}


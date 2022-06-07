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
    totalPrice: number,
    quantity: number,
    image: string
}

export interface State {
    cart: {
        cart: Cart[],
        totalPrice: number,
        totalQuantity: number,
        isCartVisible: boolean,
    },
    gamesList: {
        gamesList: Game[],
        isLoaded: boolean
    }
}


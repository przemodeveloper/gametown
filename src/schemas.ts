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


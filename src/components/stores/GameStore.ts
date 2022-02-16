import { makeAutoObservable, runInAction } from "mobx";

export interface Game {
    id: string,
    title: string,
    description: string,
    price: number,
    amount: number,
    image: string
}


const GameStore = () => makeAutoObservable({
    gamesList: [] as Game[],
    cart: [] as Game[],
    totalPrice: 0 as Number,
    totalQuantity: 0 as Number,
    isCartVisible: false as Boolean,

      async fetchGames() {
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

        runInAction(() => {
          this.gamesList = loadedGames
        })
      },

      addGameToCart(game: Game) {
          const gameIndex = this.cart.findIndex((g) => g.id === game.id)
          const updatedCart = [...this.cart]  as Game[]
          if(gameIndex === -1) {
            updatedCart.push({...game, amount: 1})
          } else {
            updatedCart[gameIndex].amount++        
          }

         this.cart = updatedCart


          this.calculateTotalPrice()
          this.calculateTotalQuantity()
      },
      removeSingleGameFromCart(id: String) {
        const gameIndex = this.cart.findIndex((g) => g.id === id)
        this.cart[gameIndex].amount--

        if(this.cart[gameIndex].amount === 0) {
          const updatedCart = this.cart.filter(g => g.id !== id)
          this.cart = updatedCart
        }


        this.calculateTotalPrice()
        this.calculateTotalQuantity()
        
      },
      calculateTotalPrice() {
        this.totalPrice = Number(this.cart.map((g) => {
          return g.amount * g.price
        }).reduce((acc, el) => acc + el, 0).toFixed(2))
      },
      calculateTotalQuantity() {
        this.totalQuantity = this.cart.map((g) => {
          return g.amount
        }).reduce((acc, el) => acc + el, 0)
      },
      toggleCartVisibility() {
        if(this.totalQuantity > 0) 
          this.isCartVisible = !this.isCartVisible
      }
})

export default GameStore
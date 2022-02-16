import { makeAutoObservable } from "mobx";

export interface Game {
    id: number,
    title: string,
    description: string,
    price: number,
    amount: number,
    image: string
}


const GameStore = () => makeAutoObservable({
    gamesList: [
        {
          id: 1,
          title: "Sifu",
          description:
            "Third person action game featuring intense hand-to-hand combat",
          price: 39.99,
          image: "https://i.iplsc.com/sifu/000EILQDE225H421-C122-F4.jpg",
        },
        {
          id: 2,
          title: "Elden Ring",
          description:
            "Rise, Tarnished, and be guided by grace to brandish the power of the Elden Ring",
          price: 49.95,
          image:
            "https://image.api.playstation.com/vulcan/ap/rnd/202107/1612/Y5RHNmzAtc6sRYwZlYiKHAxN.png",
        },
        {
          id: 3,
          title: "Dying Light 2: Stay Human",
          description:
            "The virus won and civilization has fallen back to the Dark Ages.",
          price: 59.99,
          image:
            "https://sm.ign.com/ign_pl/screenshot/default/losghsqn4vm7t4n6ux4dvy_xkpk.jpg",
        },
        {
          id: 4,
          title: "God of War",
          description:
            "His vengeance against the Gods of Olympus years behind him, Kratos now lives as a man in the realm of Norse Gods and monsters.",
          price: 39.91,
          image:
            "https://moviesroom.pl/wp-content/uploads/2021/12/449edab839fbe5c9dad1671bd932a3e4.jpg",
        },
        {
          id: 5,
          title: "Halo Infinite",
          description:
            "When all hope is lost and humanity’s fate hangs in the balance, the Master Chief is ready to confront the most ruthless foe he’s ever faced.",
          price: 59.99,
          image:
            "https://image.ceneostatic.pl/data/article_picture/3e/8c/0693-6ab3-447a-8a47-1efc0af5a6ec_medium.jpg",
        },
      ] as Game[],

      cart: [] as Game[],
      totalPrice: 0 as Number,
      totalQuantity: 0 as Number,
      isCartVisible: false as Boolean,

      addGameToCart(game: Game) {
          const gameIndex = this.cart.findIndex((g) => g.id === game.id)
          if(gameIndex === -1) {
              this.cart.push({...game, amount: 1})
          } else {
              this.cart[gameIndex].amount++
          }


          this.calculateTotalPrice()
          this.calculateTotalQuantity()
      },
      removeSingleGameFromCart(id: Number) {
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
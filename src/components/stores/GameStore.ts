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
          price: 29.99,
          image: "https://i.iplsc.com/sifu/000EILQDE225H421-C122-F4.jpg",
        },
        {
          id: 2,
          title: "Elden Ring",
          description:
            "Rise, Tarnished, and be guided by grace to brandish the power of the Elden Ring",
          price: 12.89,
          image:
            "https://image.api.playstation.com/vulcan/ap/rnd/202107/1612/Y5RHNmzAtc6sRYwZlYiKHAxN.png",
        },
      ] as Game[],

      cart: [] as Game[],

      addGameToCart(game: Game) {
          const gameIndex = this.cart.findIndex((g) => g.id === game.id)
          if(gameIndex === -1) {
              this.cart.push({...game, amount: 1})
          } else {
              this.cart[gameIndex].amount++
          }
      
      }
})

export default GameStore
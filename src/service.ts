import { Dispatch } from "redux"
import { cartActions } from "./redux/store"

export const fetchGames = async (dispatch: Dispatch) => {
    let isLoaded = false;
    const response = await fetch("https://gametown-f29a0-default-rtdb.firebaseio.com/games.json")
    const data = await response.json()

    const gamesList = []

    for(const key in data) {
      gamesList.push({
        id: key,
        title: data[key].title,
        description: data[key].description,
        price: data[key].price,
        image: data[key].image,
      })
    }

    isLoaded = true;
  
    dispatch(cartActions.loadList({gamesList, isLoaded}))
  } 
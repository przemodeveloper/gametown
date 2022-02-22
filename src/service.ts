import { Dispatch } from "redux"
import { LOAD_GAMES } from "./redux/actionTypes"
import { Game } from "./schemas"

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
  
  
    dispatch({type: LOAD_GAMES, payload: loadedGames })
  } 
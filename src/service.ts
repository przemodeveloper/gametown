import { Dispatch } from "redux"
import { LOAD_GAMES } from "./redux/actionTypes"

export const fetchGames = async (dispatch: Dispatch) => {
    const response = await fetch("https://gametown-f29a0-default-rtdb.firebaseio.com/games.json")
    const data = await response.json()
  
    dispatch({type: LOAD_GAMES, payload: data })
  } 
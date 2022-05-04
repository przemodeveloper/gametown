import { Dispatch } from "redux"
import { cartActions } from "./redux/store"

export const fetchGames = async (dispatch: Dispatch) => {
    const response = await fetch("https://gametown-f29a0-default-rtdb.firebaseio.com/games.json")
    const data = await response.json()
  
    dispatch(cartActions.transformPayload(data))
  } 
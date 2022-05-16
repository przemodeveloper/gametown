import { createSlice } from "@reduxjs/toolkit";
import { Game } from "../schemas";

const initialGamesListState = {
    gamesList: [] as Game[],
    isLoaded: false,
  }
  
const gamesListSlice = createSlice({
    name: 'gamesList',
    initialState: initialGamesListState,
    reducers: {
      loadList(state, action) {
        state.gamesList = action.payload.gamesList;
        state.isLoaded = action.payload.isLoaded;
      },
    }
  })

export default gamesListSlice.reducer;
  
export const gamesListActions = gamesListSlice.actions;
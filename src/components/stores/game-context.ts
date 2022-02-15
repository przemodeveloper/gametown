import { useContext, createContext } from "react";
import GameStore from "./GameStore";

const store = {
    games: GameStore()
}

export const StoreContext = createContext(store)

export const useStore = () => {
    return useContext<typeof store>(StoreContext)
}

export default store

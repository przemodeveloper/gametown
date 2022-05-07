import Cart from "./components/Cart/Cart";
import GamesList from "./components/GamesList/GamesList";
import Header from "./components/UI/Header/Header";
import store from "./redux/store";
import { useEffect } from "react";
import { State } from "./schemas";
import { fetchGames } from "./service";
import Loader from "./components/UI/Loader/Loader";
import { useAppSelector } from "./hooks";

const App = () => {
  const isCartVisible = useAppSelector((state: State) => state.isCartVisible);
  const totalQuantity = useAppSelector((state: State) => state.totalQuantity);
  const isLoaded = useAppSelector((state: State) => state.isLoaded);
  const games = useAppSelector((state: State) => state.gamesList);

  useEffect(() => {
    store.dispatch(fetchGames);
  }, []);

  return (
    <>
      <Header />
      <div className="container">
        {isCartVisible && totalQuantity > 0 && <Cart />}
        {isLoaded ? <GamesList games={games} /> : <Loader />}
      </div>
    </>
  );
};

export default App;

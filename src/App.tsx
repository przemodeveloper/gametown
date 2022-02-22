import { useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import GamesList from "./components/GamesList/GamesList";
import Header from "./components/Header/Header";
import store from "./redux/store";
import { useEffect } from "react";
import { State } from "./schemas";
import { fetchGames } from "./service";

const App = () => {
  const isCartVisible = useSelector((state: State) => state.isCartVisible);
  const totalQuantity = useSelector((state: State) => state.totalQuantity);

  useEffect(() => {
    store.dispatch(fetchGames as any);
  }, []);

  return (
    <>
      <Header />
      <div className="container">
        {isCartVisible && totalQuantity > 0 && <Cart />}
        <GamesList />
      </div>
    </>
  );
};

export default App;

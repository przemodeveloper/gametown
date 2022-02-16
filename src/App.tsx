import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import Cart from "./components/Cart/Cart";
import GamesList from "./components/GamesList/GamesList";
import Header from "./components/Header/Header";
import { useStore } from "./components/stores/game-context";

const App = () => {
  const { games } = useStore();

  useEffect(() => {
    games.fetchGames();
  }, [games]);

  return (
    <>
      <Header />
      <div className="container">
        {games.isCartVisible && games.totalQuantity > 0 && <Cart />}
        <GamesList />
      </div>
    </>
  );
};

export default observer(App);

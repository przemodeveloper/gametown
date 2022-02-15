import { observer } from "mobx-react-lite";
import Cart from "./components/Cart/Cart";
import GamesList from "./components/GamesList/GamesList";
import Header from "./components/Header/Header";
import { useStore } from "./components/stores/game-context";

const App = () => {
  const { games } = useStore();

  return (
    <>
      <Header />
      <div className="container">
        {games.isCartVisible && <Cart />}
        <GamesList />
      </div>
    </>
  );
};

export default observer(App);

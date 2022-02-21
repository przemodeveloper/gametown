import { useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import GamesList from "./components/GamesList/GamesList";
import Header from "./components/Header/Header";
import { State } from "./redux/store";

const App = () => {
  const isCartVisible = useSelector((state: State) => state.isCartVisible);
  const totalQuantity = useSelector((state: State) => state.totalQuantity);

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

import Cart from "./components/Cart/Cart";
import GamesList from "./components/GamesList/GamesList";
import Header from "./components/Header/Header";

const App = () => {
  return (
    <>
      <Header />
      <div className="container">
        <Cart />
        <GamesList />
      </div>
    </>
  );
};

export default App;

import { observer } from "mobx-react-lite";
import { useStore } from "../stores/game-context";
import CartItem from "./CartItem";
import PriceSummary from "./PriceSummary";

const Cart = () => {
  const { games } = useStore();

  return (
    <>
      {games.cart.map((crt) => {
        return (
          <CartItem
            key={crt.id}
            title={crt.title}
            amount={crt.amount}
            price={crt.price}
          />
        );
      })}
      <PriceSummary />
    </>
  );
};

export default observer(Cart);

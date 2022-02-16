import { observer } from "mobx-react-lite";
import { useStore } from "../stores/game-context";
import CartItem from "./CartItem";
import PriceSummary from "./PriceSummary";

const Cart = () => {
  const { games } = useStore();

  return (
    <>
      {games.cart.map((item) => {
        return (
          <CartItem
            key={item.id}
            id={item.id}
            title={item.title}
            amount={item.amount}
            price={item.price}
            cartItem={item}
          />
        );
      })}
      <PriceSummary />
    </>
  );
};

export default observer(Cart);

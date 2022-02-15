import { observer } from "mobx-react-lite";
import { useStore } from "../stores/game-context";
import classes from "./Cart.module.scss";
import CartItem from "./CartItem";

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
    </>
  );
};

export default observer(Cart);

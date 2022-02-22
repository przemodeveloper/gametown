import { useSelector } from "react-redux";
import { State } from "../../schemas";
import CartItem from "./CartItem";
import PriceSummary from "./PriceSummary";

const Cart = () => {
  const cart = useSelector((state: State) => state.cart);

  return (
    <>
      {cart.map((item: any) => {
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

export default Cart;

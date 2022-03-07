import { useAppSelector } from "../../hooks";
import { State } from "../../schemas";
import CartItem from "./CartItem";
import PriceSummary from "./PriceSummary";
import Modal from "../UI/UI/Modal";

const Cart = () => {
  const cart = useAppSelector((state: State) => state.cart);

  return (
    <Modal>
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
    </Modal>
  );
};

export default Cart;

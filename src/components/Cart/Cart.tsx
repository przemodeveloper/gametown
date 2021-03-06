import { useAppDispatch, useAppSelector } from "../../hooks";
import { State } from "../../schemas";
import Button from "../UI/Button/Button";
import Modal from "../UI/Modal/Modal";
import CartItem from "./CartItem";
import PriceSummary from "./PriceSummary";
import classes from "./Cart.module.scss";
import { cartActions } from "../../redux/cartSlice";

const Cart = () => {
  const cart = useAppSelector((state: State) => state.cart.cart);
  const dispatch = useAppDispatch();

  const hideCart = () => {
    dispatch(cartActions.toggleCartVisibility());
  };

  return (
    <Modal>
      {cart.map((item) => {
        return (
          <CartItem
            key={item.id}
            id={item.id}
            title={item.title}
            amount={item.quantity}
            price={item.price}
            cartItem={item}
          />
        );
      })}
      <div className="d-flex justify-content-between align-items-center">
        <PriceSummary
          totalPrice={cart.reduce((acc, el) => acc + el.totalPrice, 0)}
        />
        <Button
          className={classes["close-btn"]}
          text="close"
          onClick={hideCart}
        />
      </div>
    </Modal>
  );
};

export default Cart;

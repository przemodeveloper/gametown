import classes from "./CartItem.module.scss";
import { Game } from "../../schemas";
import { FC } from "react";
import { useAppDispatch } from "../../hooks";
import Button from "../UI/Button/Button";
import { cartActions } from "../../redux/store";

const CartItem: FC<{
  title: string;
  price: number;
  amount: number;
  id: string;
  cartItem: Game;
}> = (props) => {
  const dispatch = useAppDispatch();

  const addGameHandler = (game: Game) => {
    dispatch(cartActions.addGameToCart(game));
    dispatch(cartActions.recalculatePrice());
  };

  const removeGameHandler = (id: string) => {
    dispatch(cartActions.removeGameFromCart(id));
    dispatch(cartActions.recalculatePrice());
  };

  return (
    <div className={classes["cart-item"]}>
      <p className="fw-bold">{props.title}</p>
      <div className={classes.label}>
        <p className="mb-0">{`$${props.price}`}</p>
        <div className={classes.amount}>
          <p className="mb-0">x {props.amount}</p>
        </div>
        <div className={classes["btn-group"]}>
          <Button
            className={classes.btn}
            onClick={() => addGameHandler(props.cartItem)}
            text="+"
          />
          <Button
            className={classes.btn}
            onClick={() => removeGameHandler(props.id)}
            text="-"
          />
        </div>
      </div>
    </div>
  );
};

export default CartItem;

import classes from "./CartItem.module.scss";
import {
  ADD_GAME_TO_CART,
  RECALCULATE_PRICE,
  RECALCULATE_QUANTITY,
  REMOVE_SINGLE_GAME_FROM_CART,
} from "../../redux/actionTypes";
import { Game } from "../../schemas";
import { FC } from "react";
import { useAppDispatch } from "../../hooks";

const CartItem: FC<{
  title: string;
  price: number;
  amount: number;
  id: string;
  cartItem: Game;
}> = (props) => {
  const dispatch = useAppDispatch();

  const addGameHandler = (game: Game) => {
    dispatch({ type: ADD_GAME_TO_CART, payload: game });
    dispatch({ type: RECALCULATE_PRICE });
    dispatch({ type: RECALCULATE_QUANTITY });
  };

  const removeGameHandler = (id: string) => {
    dispatch({ type: REMOVE_SINGLE_GAME_FROM_CART, payload: id });
    dispatch({ type: RECALCULATE_PRICE });
    dispatch({ type: RECALCULATE_QUANTITY });
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
          <button onClick={() => addGameHandler(props.cartItem)}>+</button>
          <button onClick={() => removeGameHandler(props.id)}>-</button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;

import classes from "./CartItem.module.scss";
import { useDispatch } from "react-redux";
import {
  ADD_GAME_TO_CART,
  REMOVE_SINGLE_GAME_FROM_CART,
} from "../../redux/actionTypes";
import { Game } from "../../schemas";

const CartItem: React.FC<{
  title: string;
  price: number;
  amount: number;
  id: string;
  cartItem: Game;
}> = (props) => {
  const dispatch = useDispatch();

  const addGameHandler = (game: Game) => {
    dispatch({ type: ADD_GAME_TO_CART, payload: game });
  };

  const removeGameHandler = (id: string) => {
    dispatch({ type: REMOVE_SINGLE_GAME_FROM_CART, payload: id });
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

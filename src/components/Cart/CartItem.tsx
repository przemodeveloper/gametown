import classes from "./CartItem.module.scss";
import { useStore } from "../stores/game-context";
import { Game } from "../stores/GameStore";

const CartItem: React.FC<{
  title: string;
  price: number;
  amount: number;
  id: string;
  cartItem: Game;
}> = (props) => {
  const { games } = useStore();
  return (
    <div className={classes["cart-item"]}>
      <p className="fw-bold">{props.title}</p>
      <div className={classes.label}>
        <p className="mb-0">{`$${props.price}`}</p>
        <div className={classes.amount}>
          <p className="mb-0">x {props.amount}</p>
        </div>
        <div className={classes["btn-group"]}>
          <button onClick={() => games.addGameToCart(props.cartItem)}>+</button>
          <button onClick={() => games.removeSingleGameFromCart(props.id)}>
            -
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;

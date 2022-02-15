import { observer } from "mobx-react-lite";
import { useStore } from "../stores/game-context";
import classes from "./Cart.module.scss";

const Cart = () => {
  const { games } = useStore();

  return (
    <div>
      {games.cart.map((crt) => {
        return (
          <div className={classes.cart}>
            <div className={classes["cart-inner"]}>
              <p className="fw-bold">{crt.title}</p>
              <div className={classes.label}>
                <p className="mb-0">{`${crt.price}`}</p>
                <div className={classes.amount}>
                  <p className="mb-0">x {crt.amount}</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default observer(Cart);

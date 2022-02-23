import classes from "./Header.module.scss";

import { TOGGLE_CART_VISIBILITY } from "../../../redux/actionTypes";
import { State } from "../../../schemas";
import { useAppDispatch, useAppSelector } from "../../../hooks";

const Header = () => {
  const totalQuantity = useAppSelector((state: State) => state.totalQuantity);

  const dispatch = useAppDispatch();

  const toggleHandler = () => {
    dispatch({ type: TOGGLE_CART_VISIBILITY });
  };

  return (
    <header className={classes.header}>
      <h1 className="mb-0">gameTOWN</h1>
      <div>
        <button onClick={toggleHandler} className={classes["cart-btn"]}>
          Cart ({totalQuantity})
        </button>
      </div>
    </header>
  );
};

export default Header;

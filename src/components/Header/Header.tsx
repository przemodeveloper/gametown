import classes from "./Header.module.scss";

import { useDispatch, useSelector } from "react-redux";
import { TOGGLE_CART_VISIBILITY } from "../../redux/actionTypes";
import { State } from "../../schemas";

const Header = () => {
  const totalQuantity = useSelector((state: State) => state.totalQuantity);

  const dispatch = useDispatch();

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

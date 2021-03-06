import classes from "./Header.module.scss";

import { useAppDispatch, useAppSelector } from "../../../hooks";
import Button from "../Button/Button";
import { cartActions } from "../../../redux/cartSlice";

const Header = () => {
  const totalQuantity = useAppSelector((state) => state.cart.totalQuantity);
  const dispatch = useAppDispatch();

  const toggleHandler = () => {
    dispatch(cartActions.toggleCartVisibility());
  };

  return (
    <header className={classes.header}>
      <h1 className="mb-0">gameTOWN</h1>
      <div>
        <Button
          onClick={toggleHandler}
          className={classes["cart-btn"]}
          text={`Cart (${totalQuantity})`}
        />
      </div>
    </header>
  );
};

export default Header;

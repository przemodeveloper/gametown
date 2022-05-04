import classes from "./Header.module.scss";

import { State } from "../../../schemas";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import Button from "../Button/Button";
import { cartActions } from "../../../redux/store";

const Header = () => {
  const totalQuantity = useAppSelector((state: State) => state.totalQuantity);

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

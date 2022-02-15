import classes from "./Header.module.scss";

import { useStore } from "../stores/game-context";
import { observer } from "mobx-react-lite";

const Header = () => {
  const { games } = useStore();
  return (
    <header
      className={classes.header}
      onClick={() => games.toggleCartVisibility()}
    >
      <h1 className="mb-0">gameTOWN</h1>
      <div>
        <button className={classes["cart-btn"]}>
          Cart ({games.totalQuantity})
        </button>
      </div>
    </header>
  );
};

export default observer(Header);

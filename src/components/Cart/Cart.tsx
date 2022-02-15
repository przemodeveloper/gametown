import { observer } from "mobx-react-lite";
import { useStore } from "../stores/game-context";

const Cart = () => {
  const { games } = useStore();

  return (
    <div>
      {games.cart.map((crt) => {
        return (
          <div>
            <p>{crt.title}</p>
            <div>
              <p>{crt.price}</p>
              <p>{crt.amount}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default observer(Cart);

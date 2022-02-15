import { observer } from "mobx-react-lite";
import GameItem from "../GameItem/GameItem";
import { useStore } from "../stores/game-context";
import classes from "./GamesList.module.scss";

const GamesList = () => {
  const { games } = useStore();

  return (
    <div className={classes.list}>
      {games.gamesList.map((game) => {
        return (
          <div onClick={() => games.addGameToCart(game)}>
            <GameItem
              key={game.id}
              title={game.title}
              description={game.description}
              price={game.price}
              image={game.image}
            />
          </div>
        );
      })}
    </div>
  );
};

export default observer(GamesList);

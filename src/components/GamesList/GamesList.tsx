import { useAppSelector } from "../../hooks";
import { Game, State } from "../../schemas";
import GameItem from "../GameItem/GameItem";
import classes from "./GamesList.module.scss";

const GamesList = () => {
  const games = useAppSelector((state: State) => state.gamesList);

  return (
    <div className={classes.list}>
      {games.map((game: Game) => {
        return <GameItem key={game.id} game={game} />;
      })}
    </div>
  );
};

export default GamesList;

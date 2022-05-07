import { Game } from "../../schemas";
import GameItem from "../GameItem/GameItem";
import classes from "./GamesList.module.scss";

const GamesList = ({ games }: { games: Game[] }) => {
  return (
    <div className={classes.list}>
      {games.map((game: Game) => {
        return <GameItem key={game.id} game={game} />;
      })}
    </div>
  );
};

export default GamesList;

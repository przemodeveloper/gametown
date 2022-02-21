import { useSelector } from "react-redux";
import { Game, State } from "../../redux/store";
import GameItem from "../GameItem/GameItem";
import classes from "./GamesList.module.scss";

const GamesList = () => {
  const games = useSelector((state: State) => state.gamesList);

  return (
    <div className={classes.list}>
      {games.map((game: Game) => {
        return <GameItem key={game.id} game={game} />;
      })}
    </div>
  );
};

export default GamesList;

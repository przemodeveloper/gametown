import { Game } from "../stores/GameStore";
import classes from "./GameItem.module.scss";
import { useStore } from "../stores/game-context";

const GameItem: React.FC<{ game: Game }> = (props) => {
  const { games } = useStore();

  return (
    <li className={classes.item}>
      <div className={classes["image-container"]}>
        <img
          src={props.game.image}
          alt={props.game.title}
          className={classes.image}
        />
      </div>
      <div className={classes["description-container"]}>
        <h2>{props.game.title}</h2>
        <p className="d-none d-md-block">{props.game.description}</p>
        <p>{`$${props.game.price}`}</p>
      </div>
      <button
        className={classes["add-btn"]}
        onClick={() => games.addGameToCart(props.game)}
      >
        Add to cart
      </button>
    </li>
  );
};

export default GameItem;

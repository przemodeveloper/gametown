import { FC } from "react";
import { useAppDispatch } from "../../hooks";
import {
  ADD_GAME_TO_CART,
  RECALCULATE_PRICE,
  RECALCULATE_QUANTITY,
} from "../../redux/actionTypes";
import { Game } from "../../schemas";
import classes from "./GameItem.module.scss";

const GameItem: FC<{ game: Game }> = (props) => {
  const dispatch = useAppDispatch();

  const addGameHandler = (game: Game) => {
    dispatch({ type: ADD_GAME_TO_CART, payload: game });
    dispatch({ type: RECALCULATE_PRICE });
    dispatch({ type: RECALCULATE_QUANTITY });
  };

  return (
    <li className={classes.item}>
      <div className={classes["image-container"]}>
        <img
          src={props.game.image}
          alt={props.game.title}
          className={classes.image}
        />
      </div>

      <div
        className={`${classes["description-container"]} d-flex justify-content-around align-items-end`}
      >
        <div>
          <h2>{props.game.title}</h2>
          <p className={classes.description}>{props.game.description}</p>
        </div>
        <p className="mb-0">{`$${props.game.price}`}</p>
      </div>

      <button
        className={classes["add-btn"]}
        onClick={() => addGameHandler(props.game)}
      >
        Add to cart
      </button>
    </li>
  );
};

export default GameItem;

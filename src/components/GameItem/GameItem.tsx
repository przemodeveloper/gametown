import { FC } from "react";
import { useAppDispatch } from "../../hooks";
import { cartActions } from "../../redux/cartSlice";
import { Game } from "../../schemas";
import Button from "../UI/Button/Button";
import classes from "./GameItem.module.scss";

const GameItem: FC<{ game: Game }> = (props) => {
  const dispatch = useAppDispatch();

  const addGameHandler = (game: Game) => {
    dispatch(cartActions.addGameToCart(game));
    dispatch(cartActions.recalculatePrice());
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
      <Button
        className={classes["add-btn"]}
        onClick={() => addGameHandler(props.game)}
        text="Add to cart"
      />
    </li>
  );
};

export default GameItem;

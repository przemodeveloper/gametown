import classes from "./GameItem.module.scss";

const GameItem: React.FC<{
  title: string;
  description: string;
  price: number;
  image: string;
}> = (props) => {
  return (
    <li className={classes.item}>
      <div className={classes["image-container"]}>
        <img src={props.image} alt="game-cover" className={classes.image} />
      </div>
      <div className={classes["description-container"]}>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        <p>{props.price}</p>
      </div>
    </li>
  );
};

export default GameItem;

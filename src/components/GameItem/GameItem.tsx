import classes from "./GameItem.module.scss";

const GameItem: React.FC<{
  title: string;
  description: string;
  price: number;
}> = (props) => {
  return (
    <li className={classes.item}>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <p>{props.price}</p>
    </li>
  );
};

export default GameItem;

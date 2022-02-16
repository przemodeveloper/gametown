import { useStore } from "../stores/game-context";
import classes from "./PriceSummary.module.scss";

const PriceSummary = () => {
  const { games } = useStore();
  return <h1 className={classes.title}>Total amount: ${games.totalPrice}</h1>;
};

export default PriceSummary;

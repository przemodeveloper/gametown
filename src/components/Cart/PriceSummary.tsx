import { useStore } from "../stores/game-context";
import classes from "./PriceSummary.module.scss";

const PriceSummary = () => {
  const { games } = useStore();
  return <h4>Total amount: {games.totalPrice}</h4>;
};

export default PriceSummary;

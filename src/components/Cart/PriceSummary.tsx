import { useStore } from "../stores/game-context";

const PriceSummary = () => {
  const { games } = useStore();
  return <h1>Total amount: ${games.totalPrice}</h1>;
};

export default PriceSummary;

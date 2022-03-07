import { useAppSelector } from "../../hooks";
import { State } from "../../schemas";
import classes from "./PriceSummary.module.scss";

const PriceSummary = () => {
  const totalPrice = useAppSelector((state: State) => state.totalPrice);

  return (
    <h1 className={classes.title}>
      Total amount:{" "}
      {new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(totalPrice)}
    </h1>
  );
};

export default PriceSummary;

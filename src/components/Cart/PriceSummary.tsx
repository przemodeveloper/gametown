import { useSelector } from "react-redux";
import { State } from "../../redux/store";
import classes from "./PriceSummary.module.scss";

const PriceSummary = () => {
  const totalPrice = useSelector((state: State) => state.totalPrice);

  return <h1 className={classes.title}>Total amount: ${totalPrice}</h1>;
};

export default PriceSummary;

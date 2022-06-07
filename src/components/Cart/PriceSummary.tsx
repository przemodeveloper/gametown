import classes from "./PriceSummary.module.scss";

const PriceSummary = ({ totalPrice }: { totalPrice: number }) => {
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

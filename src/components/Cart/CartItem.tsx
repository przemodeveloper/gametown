import classes from "./CartItem.module.scss";

const CartItem: React.FC<{ title: string; price: number; amount: number }> = (
  props
) => {
  return (
    <div className={classes["cart-item"]}>
      <p className="fw-bold">{props.title}</p>
      <div className={classes.label}>
        <p className="mb-0">{`$${props.price}`}</p>
        <div className={classes.amount}>
          <p className="mb-0">x {props.amount}</p>
        </div>
      </div>
    </div>
  );
};

export default CartItem;

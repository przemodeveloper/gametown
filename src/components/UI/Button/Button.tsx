import { FC } from "react";
import classes from "./Button.module.scss";

const Button: FC<{ text: String; className?: String; onClick: () => void }> = (
  props
) => {
  const styles = `${classes.btn} ${props.className}`;

  return (
    <button onClick={props.onClick} className={styles}>
      {props.text}
    </button>
  );
};

export default Button;

import classes from "./Modal.module.scss";
import { FC, ReactNode } from "react";
import ReactDOM from "react-dom";
import { useAppDispatch } from "../../../hooks";
import { TOGGLE_CART_VISIBILITY } from "../../../redux/actionTypes";

const Backdrop = () => {
  const dispatch = useAppDispatch();

  const toggleHandler = () => {
    dispatch({ type: TOGGLE_CART_VISIBILITY });
  };

  return <div className={classes.backdrop} onClick={toggleHandler}></div>;
};

const ModalOverlay: FC<{ children: ReactNode }> = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays")!;

const Modal: FC<{ children: ReactNode }> = (props) => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
};

export default Modal;

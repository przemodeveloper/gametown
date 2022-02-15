import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import store, { StoreContext } from "./components/stores/game-context";

ReactDOM.render(
  <StoreContext.Provider value={store}>
    <App />
  </StoreContext.Provider>,
  document.getElementById("root")
);

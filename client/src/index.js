import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import { BrowserRouter } from "react-router-dom";
import App from "./components/App/App";
import { store } from "./store/store";

import "./styles/_style.scss";
import "swiper/css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store()}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

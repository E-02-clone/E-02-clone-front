import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./app/store";
import setAuthorizationToken from "./app/slice/auth";
import { currentUser } from "./app/slice/userSlice";
import jwt_decode from "jwt-decode";
import "bootstrap/dist/css/bootstrap.min.css";

if (localStorage.jwtToken) {
  setAuthorizationToken(localStorage.jwtToken);
  store.dispatch(currentUser(jwt_decode(localStorage.jwtToken)));
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

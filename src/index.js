import React from "react";
import ReactDOM from "react-dom";
import App from "./app/Components/App";
import registerServiceWorker from "./registerServiceWorker";
import { createStore } from "redux";
import reducers from "../src/app/Reducers";
import middleware from "../src/app/Middleware";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

const store = createStore(reducers, middleware);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById("root")
);
registerServiceWorker();

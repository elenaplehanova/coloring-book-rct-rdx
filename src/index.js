import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./components/app";
import ErrorBoundry from "./components/error-boundry/error-boundry";
import { ColoringBookServiceProvider } from "./components/coloring-book-service-context";
import ColoringBookServiceMock from "./services/coloring-book-service-mock";
import store from "./store";

const coloringBookService = new ColoringBookServiceMock();

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundry>
            <ColoringBookServiceProvider value={coloringBookService}>
                <Router>
                    <App />
                </Router>
            </ColoringBookServiceProvider>
        </ErrorBoundry>
    </Provider>,
    document.getElementById("root")
);

import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Header from "../header/header";
import { HomePage, ColoringPage } from "../pages";

import "./app.css";

const App = () => {
    return (
        <main role="main" className="container-fluid">
            <Header />
            <Switch>
                <Route path="/" component={HomePage} exact />
                <Route
                    path="/coloring_page/:id"
                    render={({ match }) => {
                        const { id } = match.params;

                        return <ColoringPage pictureId={id} />;
                    }}
                />
                <Route path="*">
                    <Redirect to="/" />
                </Route>
            </Switch>
        </main>
    );
};

export default App;

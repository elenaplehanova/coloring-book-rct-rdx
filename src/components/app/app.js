import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "../header/header";
import { HomePage, ColoringPage } from "../pages";

import "./app.css";

const App = () => {
    return (
        <main role="main" className="container-fluid">
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} exact />
                <Route path="/coloring_page/:id" element={<ColoringPage />} />
                <Route
                    path="*"
                    element={<Navigate to="/" />}
                />
            </Routes>
        </main>
    );
};

export default App;

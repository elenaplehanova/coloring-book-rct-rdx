import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Context from "../../context";
import Header from "../header";
import HomePage from "../pages/home-page";
import ColoringPage from "../pages/coloring-page";

import "./app.scss";

const App = () => {
    let [pictureId, setPictureId] = useState(1);

    return (
        <main role="main">
            <Context.Provider value={{ pictureId, setPictureId }}>
                <Header />
                <Routes>
                    <Route path="/" element={<HomePage />} exact />
                    <Route path="/coloring_page/:id" element={<ColoringPage />} />
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
            </Context.Provider>
        </main>
    );
};

export default App;

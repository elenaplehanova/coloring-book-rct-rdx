import React from "react";
import { Link } from "react-router-dom";

import "./header.css";

const Header = () => {
    return (
        <div className="header d-flex">
            <Link to="/">
                <h3>Coloring book</h3>
            </Link>
        </div>
    );
};

export default Header;

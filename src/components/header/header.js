import React, { useContext } from "react";
import { Link, useMatch } from "react-router-dom";
import Context from "../../context";
import "./header.scss";

function CustomLink({ icon, to, exact }) {
    let match = useMatch({
        path: to,
        exact,
    });

    return (
        <Link to={to}>
            <li>
                <i className={`bi ${icon}${match ? "-fill" : ""}`} />
            </li>
        </Link>
    );
}

const Header = () => {
    const value = useContext(Context);

    return (
        <nav>
            <ul className="header">
                <CustomLink icon="bi-house" to="/" exact={true} />
                <CustomLink
                    icon="bi-palette"
                    to={`/coloring_page/${value.pictureId}`}
                    exact={false}
                />
            </ul>
        </nav>
    );
};

export default Header;

import React from "react";
import { Link } from "react-router-dom";

import "./picture.scss";

const Picture = ({ picture }) => {
    return (
        <div className="hovereffect-container">
            <svg className="svg-picture">
                {picture.paths.map((path) => {
                    return (
                        <path
                            key={path.id}
                            d={path.d}
                            strokeWidth="0"
                            stroke="black"
                            fill="white"
                        />
                    );
                })}
            </svg>

            <Link to={`/coloring_page/${picture.id}`}>
                <button className="button button-overlay">
                    <i className="bi bi-brush"></i>
                </button>
            </Link>
        </div>
    );
};

export default Picture;

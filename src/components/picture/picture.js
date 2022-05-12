import React from "react";
import { Link } from "react-router-dom";
import SvgPicture from "../svg-picture";

import "./picture.scss";

const Picture = ({ picture }) => {
    return (
        <div className="picture">
            <SvgPicture className="picture__svg-picture" picture={picture} />
            <Link to={`/coloring_page/${picture.id}`}>
                <button className="picture__button-overlay button">
                    <i className=" bi bi-brush"></i>
                </button>
            </Link>
        </div>
    );
};

export default Picture;

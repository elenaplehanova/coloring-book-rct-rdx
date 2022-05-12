import React from "react";

import "./svg-picture.scss";

const SvgPicture = ({ picture, fillColors, onFill }) => {
    return (
        <svg className="svg-picture" key={picture.id}>
            {picture.paths.map((path, index) => {
                return (
                    <path
                        key={path.id}
                        d={path.d}
                        strokeWidth="0"
                        stroke="black"
                        onClick={() => onFill(index)}
                        fill={fillColors ? fillColors[index] : "white"}
                    />
                );
            })}
        </svg>
    );
};

export default SvgPicture;

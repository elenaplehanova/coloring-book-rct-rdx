import React from "react";
import { connect } from "react-redux";
import { colorSelectedInPalette } from "../../actions";

import "./color-palette.css";

const ColorPalette = ({ selectedColor, colors, colorSelectedInPalette }) => {
    return (
        <div className="color-palette">
            {colors.map((color) => {
                const activeClass = selectedColor === color ? "color-swatch-active" : "";
                return (
                    <div
                        key={color}
                        onClick={() => {
                            colorSelectedInPalette(color);
                        }}
                    >
                        <div
                            className={`color-swatch ${activeClass}`}
                            style={{ backgroundColor: color }}
                        ></div>
                    </div>
                );
            })}
        </div>
    );
};

const mapStateToProps = ({ colorPalette: { selectedColor, colors } }) => {
    return {
        selectedColor,
        colors,
    };
};

const mapDispatchToProps = {
    colorSelectedInPalette: colorSelectedInPalette,
};

export default connect(mapStateToProps, mapDispatchToProps)(ColorPalette);
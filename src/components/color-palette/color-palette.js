import React from "react";
import { connect } from "react-redux";
import { colorSelectedInPalette } from "../../redux/actions/color-palette";

import "./color-palette.scss";

const ColorPalette = ({ selectedColor, colors, colorSelectedInPalette }) => {
    return (
        <div className="color-palette">
            {colors.map((color) => {
                const activeClass =
                    selectedColor === color ? " color-palette__color-swatch_active" : "";
                return (
                    <div
                        key={color}
                        onClick={() => {
                            colorSelectedInPalette(color);
                        }}
                        className={`color-palette__color-swatch${activeClass}`}
                        style={{ backgroundColor: color }}
                    ></div>
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

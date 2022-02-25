import { COLOR_SELECTED_IN_PALETTE } from "../types";

const colors = [
    "#eff1f2",
    "#08bcad",
    "#66a4d8",
    "#205dc4",
    "#6a3aa6",
    "#b500b4",
    "#e53ca4",
    "#ed0a00",
    "#e98c39",
    "#ffe346",
    "#9ec54c",
    "#353c3e",
];

const selectColorInPalette = (state, action) => {
    if (state === undefined) {
        return {
            selectedColor: "#08bcad",
            colors: colors,
        };
    }
    switch (action.type) {
        case COLOR_SELECTED_IN_PALETTE:
            return {
                selectedColor: action.payload,
                colors: colors,
            };
        default:
            return state.colorPalette;
    }
};

export default selectColorInPalette;

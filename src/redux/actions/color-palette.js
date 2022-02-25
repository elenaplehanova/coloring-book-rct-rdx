import { COLOR_SELECTED_IN_PALETTE } from "../types";

export const colorSelectedInPalette = (selectedColor) => {
    return {
        type: COLOR_SELECTED_IN_PALETTE,
        payload: selectedColor,
    };
};

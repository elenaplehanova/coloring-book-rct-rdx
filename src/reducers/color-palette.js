const colors = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "turquoise",
    "purple",
    "pink",
    "deeppink",
];

const selectColorInPalette = (state, action) => {
    if (state === undefined) {
        return {
            selectedColor: "blue",
            colors: colors,
        };
    }
    switch (action.type) {
        case "COLOR_SELECTED_IN_PALETTE":
            return {
                selectedColor: action.payload,
                colors: colors,
            };
        default:
            return state.colorPalette;
    }
};

export default selectColorInPalette;

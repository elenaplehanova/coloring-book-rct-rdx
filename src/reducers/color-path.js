const setDefaultColor = (length) => {
    const newFillColors = new Array(length).fill("white");

    return { fillColors: newFillColors };
};

const updateColor = (state, index) => {
    const {
        colorPalette: { selectedColor },
        colorPath: { fillColors },
    } = state;

    const newFillColors = [
        ...fillColors.slice(0, index),
        selectedColor,
        ...fillColors.slice(index + 1),
    ];

    return { fillColors: newFillColors };
};

const updateColorPath = (state, action) => {
    if (state === undefined) {
        return {
            fillColors: [],
        };
    }
    switch (action.type) {
        case "COLOR_SET_DEFAULT":
            return setDefaultColor(action.payload);
        case "COLOR_ADDED_TO_PATH":
            return updateColor(state, action.payload);
        default:
            return state.colorPath;
    }
};

export default updateColorPath;

import updatePictureList from "./picture-list";
import updateColorPath from "./color-path";
import selectColorInPalette from "./color-palette";
import fetchColoringPicture from "./coloring-picture";

const reducer = (state, action) => {
    return {
        pictureList: updatePictureList(state, action),
        colorPath: updateColorPath(state, action),
        colorPalette: selectColorInPalette(state, action),
        coloringPicture: fetchColoringPicture(state, action),
    };
};

export default reducer;

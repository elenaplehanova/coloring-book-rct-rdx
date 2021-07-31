const picturesRequested = () => {
    return {
        type: "FETCH_PICTURES_REQUEST",
    };
};

const picturesLoaded = (coloringPictures) => {
    return {
        type: "FETCH_PICTURES_SUCCESS",
        payload: coloringPictures,
    };
};

const picturesError = (error) => {
    return {
        type: "FETCH_PICTURES_FAILURE",
        payload: error,
    };
};

const fetchPictures = (coloringBookService) => () => (dispatch) => {
    dispatch(picturesRequested());
    coloringBookService
        .getAllData()
        .then((data) => {
            dispatch(picturesLoaded(data));
        })
        .catch((error) => dispatch(picturesError(error)));
};

export { fetchPictures };

const pictureRequested = () => {
    return {
        type: "FETCH_PICTURE_REQUEST",
    };
};

export const pictureLoaded = (picture) => {
    return {
        type: "FETCH_PICTURE_SUCCESS",
        payload: picture,
    };
};

const pictureError = (error) => {
    return {
        type: "FETCH_PICTURE_FAILURE",
        payload: error,
    };
};

const fetchPicture = (coloringBookService) => (pictureId) => (dispatch) => {
    dispatch(pictureRequested());
    coloringBookService
        .getDataById(pictureId)
        .then((data) => {
            dispatch(pictureLoaded(data));
            dispatch(setDefaultColor(data.paths.length));
        })
        .catch((error) => dispatch(pictureError(error)));
};

export { fetchPicture };

const setDefaultColor = (length) => {
    return {
        type: "COLOR_SET_DEFAULT",
        payload: length,
    };
};

export const colorAddedToPath = (index) => {
    return {
        type: "COLOR_ADDED_TO_PATH",
        payload: index,
    };
};

export const colorSelectedInPalette = (selectedColor) => {
    return {
        type: "COLOR_SELECTED_IN_PALETTE",
        payload: selectedColor,
    };
};

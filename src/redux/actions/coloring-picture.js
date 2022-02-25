import { FETCH_PICTURE_REQUEST, FETCH_PICTURE_SUCCESS, FETCH_PICTURE_FAILURE } from "../types";
import { setDefaultColor } from "./color-path";

export const pictureRequested = () => {
    return {
        type: FETCH_PICTURE_REQUEST,
    };
};

export const pictureLoaded = (picture) => {
    return {
        type: FETCH_PICTURE_SUCCESS,
        payload: picture,
    };
};

export const pictureError = (error) => {
    return {
        type: FETCH_PICTURE_FAILURE,
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

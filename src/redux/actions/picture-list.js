import { FETCH_PICTURES_REQUEST, FETCH_PICTURES_SUCCESS, FETCH_PICTURES_FAILURE } from "../types";

const picturesRequested = () => {
    return {
        type: FETCH_PICTURES_REQUEST,
    };
};

const picturesLoaded = (coloringPictures) => {
    return {
        type: FETCH_PICTURES_SUCCESS,
        payload: coloringPictures,
    };
};

const picturesError = (error) => {
    return {
        type: FETCH_PICTURES_FAILURE,
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

const fetchColoringPicture = (state, action) => {
    if (state === undefined) {
        return {
            picture: null,
            loading: true,
            error: null,
        };
    }
    switch (action.type) {
        case "FETCH_PICTURE_REQUEST":
            return {
                picture: null,
                loading: true,
                error: null,
            };
        case "FETCH_PICTURE_SUCCESS":
            return {
                picture: action.payload,
                loading: false,
                error: null,
            };
        case "FETCH_PICTURE_FAILURE":
            return {
                picture: null,
                loading: false,
                error: action.payload,
            };
        default:
            return state.coloringPicture;
    }
};

export default fetchColoringPicture;

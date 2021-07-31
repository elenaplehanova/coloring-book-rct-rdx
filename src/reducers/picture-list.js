const updatePictureList = (state, action) => {
    if (state === undefined) {
        return {
            pictures: [],
            loading: true,
            error: null,
        };
    }
    switch (action.type) {
        case "FETCH_PICTURES_REQUEST":
            return {
                pictures: [],
                loading: true,
                error: null,
            };
        case "FETCH_PICTURES_SUCCESS":
            return {
                pictures: action.payload,
                loading: false,
                error: null,
            };
        case "FETCH_PICTURES_FAILURE":
            return {
                pictures: [],
                loading: false,
                error: action.payload,
            };
        default:
            return state.pictureList;
    }
};

export default updatePictureList;

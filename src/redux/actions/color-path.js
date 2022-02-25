import { COLOR_SET_DEFAULT, COLOR_ADDED_TO_PATH } from "../types";

export const setDefaultColor = (length) => {
    return {
        type: COLOR_SET_DEFAULT,
        payload: length,
    };
};

export const colorAddedToPath = (index) => {
    return {
        type: COLOR_ADDED_TO_PATH,
        payload: index,
    };
};

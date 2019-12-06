import { SET_TODOS } from "../actions";

const initialState = [];

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case SET_TODOS:
            return payload;

        default:
            return state;
    }
};

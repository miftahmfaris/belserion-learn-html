import { axios } from "../helpers";
export const SET_TODOS = "SET_TODOS";

export const setTodos = payload => {
    return {
        type: SET_TODOS,
        payload
    };
};

export const fetchTodos = email => dispatch => {
    return axios()
        .get(`/todo/email/${email}`)
        .then(result => {
            dispatch(setTodos(result.data.data));
        });
};

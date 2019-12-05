import Axios from "axios";

export const axios = () => {
    Axios.defaults.baseURL = process.env.REACT_APP_API_LIVE;
    Axios.defaults.headers.common["X-API-KEY"] =
        process.env.REACT_APP_JWT_SECRET_KEY;

    const token = JSON.parse(localStorage.getItem("token"));

    if (token) {
        Axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
    return Axios;
};

export const axiosPlaceholder = () => {
    Axios.defaults.baseURL = process.env.REACT_APP_API_PLACEHOLDER;

    return Axios;
};

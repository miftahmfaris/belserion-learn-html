import axios from "axios";

export const loginValidation = async values => {
    const API = process.env.REACT_APP_API_LIVE;

    let errors = {};

    try {
        const { data: result } = await axios.post(
            `${API}/validate/login`,
            values
        );

        return { ...errors, ...result };
    } catch (err) {
        throw err;
    }
};

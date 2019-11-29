const { get } = require("../../config");

const login = async ({ email, password }) => {
    try {
        const result = {};
        const data = await get()
            .collection("users")
            .findOne({ email: email, password: password });

        if (!email) {
            result.email = "Wajib Isi";
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
            result.email = "Format Email salah";
        }

        if (!password) {
            result.password = "Wajib Isi";
        } else if (password) {
            if (!data) {
                result.password = "Email/Password Salah";
            }
        }

        return result;
    } catch (error) {
        throw error;
    }
};

module.exports = login;

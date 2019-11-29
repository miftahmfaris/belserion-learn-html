const { get } = require("../../config");

const signup = async ({ email, password, firstName, lastName }) => {
    try {
        const result = {};
        const data = await get()
            .collection("users")
            .findOne({ email: email });

        if (!email) {
            result.email = "Wajib Isi";
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
            result.email = "Format Email salah";
        } else if (email) {
            if (data) {
                result.email = "Email sudah terdaftar";
            }
        }

        if (!password) {
            result.password = "Wajib Isi";
        } else if (password.length < 8) {
            result.password = "Password minimal 8 karakter";
        }

        if (!firstName) {
            result.firstName = "Wajib Isi";
        }

        if (!lastName) {
            result.lastName = "Wajib Isi";
        }

        return result;
    } catch (error) {
        throw error;
    }
};

module.exports = signup;

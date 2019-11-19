export const validationForm = ({ firstName, lastName, email, password }) => {
    let errors = {};

    if (!email) {
        errors.email = "Wajib Isi";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
        errors.email = "Format email salah";
    }

    if (!password) {
        errors.password = "Wajib Isi";
    } else if (password.length < 8) {
        errors.password = "Password minimal 8 karakter";
    }

    if (!firstName) {
        errors.firstName = "Wajib Isi";
    }

    if (!lastName) {
        errors.lastName = "Wajib Isi";
    }

    return errors;
};

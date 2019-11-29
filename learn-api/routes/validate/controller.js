const signup = require("./signup");
const login = require("./login");

module.exports = () => {
    const validate = async (req, res) => {
        try {
            const {
                body,
                params: { id }
            } = req;
            let result = {};

            switch (id) {
                case "signup":
                    return res.json(await signup(body));
                case "login":
                    return res.json(await login(body));
                default:
                    return res.json(result);
            }
        } catch (error) {
            res.status(400).json(error);
        }
    };

    return {
        validate
    };
};

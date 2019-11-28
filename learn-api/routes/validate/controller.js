const signup = require("./signup");

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

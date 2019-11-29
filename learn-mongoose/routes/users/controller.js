const { Users } = require("../../models");

module.exports = {
    getAll: async (req, res) => {
        try {
            const result = await Users.find({});

            res.status(200).json({ message: "Show data Users", data: result });
        } catch (error) {
            console.log(error);
        }
    },
    addOne: async (req, res) => {
        try {
            const result = await Users.create(req.body);

            res.status(200).json({ message: "Add new User", data: result });
        } catch (error) {
            console.log(error);
        }
    }
};

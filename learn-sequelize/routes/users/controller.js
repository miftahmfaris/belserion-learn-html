const { User } = require("../../db/models");

module.exports = {
    getAll: async (req, res) => {
        try {
            const result = await User.findAll();

            res.send({ message: "show all datas", data: result });
        } catch (error) {
            console.log(error);
        }
    },
    addOne: async (req, res) => {
        try {
            const result = await User.create(req.body);

            res.send({ message: "show all datas", data: result.dataValues });
        } catch (error) {
            console.log(error);
        }
    }
};

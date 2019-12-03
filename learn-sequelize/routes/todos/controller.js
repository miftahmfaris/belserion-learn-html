const { Todo, User } = require("../../db/models");

module.exports = {
    getAll: async (req, res) => {
        try {
            const result = await Todo.findAll({
                include: [
                    {
                        model: User
                    }
                ]
            });

            res.send({ message: "show all datas", data: result });
        } catch (error) {
            console.log(error);
        }
    },
    addOne: async (req, res) => {
        try {
            const result = await Todo.create(req.body);

            res.send({ message: "show all datas", data: result.dataValues });
        } catch (error) {
            console.log(error);
        }
    }
};

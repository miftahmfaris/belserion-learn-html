const { todo: todos } = require("../../models");
const { get } = require("../../config");

module.exports = {
    getAll: (req, res) => {
        get()
            .collection("todos")
            .find({})
            .toArray()
            .then(result => {
                res.send({ message: "Get all datas", data: result });
            })
            .catch(error => {
                console.log(error);
            });
    },
    getById: (req, res) => {
        const findOne = todos.todo.find(item => {
            return item.id === Number(req.params.id);
        });

        res.send(findOne);
    },
    deleteOne: (req, res) => {
        let newTodo = todos.todo.filter(
            item => item.id !== parseInt(req.params.id)
        );

        res.send(newTodo);
    },
    addOne: (req, res) => {
        get()
            .collection("todos")
            .insertOne(req.body)
            .then(result => {
                res.send({ message: "Data successfully added", data: result });
            })
            .catch(error => {
                console.log(error);
            });
    }
};

const { user: users } = require("../../models");
const { get } = require("../../config");
const objectId = require("mongodb").ObjectId;

module.exports = {
    getAll: (req, res) => {
        get()
            .collection("users")
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
        const { id } = req.params;

        get()
            .collection("users")
            .findOne({ _id: objectId(id) })
            .then(result => {
                res.send({
                    message: `Get data with id ${id}`,
                    data: result
                });
            })
            .catch(error => {
                console.log(error);
            });
    },
    deleteOne: (req, res) => {
        const { id } = req.params;

        get()
            .collection("users")
            .deleteOne({ _id: objectId(id) })
            .then(result => {
                res.send({
                    message: `Delete data with id ${id}`,
                    data: result
                });
            })
            .catch(error => {
                console.log(error);
            });
    },
    addOne: (req, res) => {
        get()
            .collection("users")
            .insertOne(req.body)
            .then(result => {
                res.status(201).json({
                    message: "Data successfully added",
                    data: result
                });
            })
            .catch(error => {
                console.log(error);
            });
    },
    updateOne: (req, res) => {
        const { id } = req.params;
        get()
            .collection("users")
            .updateOne({ _id: objectId(id) }, { $set: req.body })
            .then(result => {
                res.send({
                    message: `Data successfully update with id ${id}`,
                    data: result
                });
            })
            .catch(error => {
                console.log(error);
            });
    },
    login: (req, res) => {
        const { body } = req;

        get()
            .collection("users")
            .findOne({ email: body.email, password: body.password })
            .then(response => {
                const { email, firstName } = response;
                res.status(200).json({
                    message: "Login successfull",
                    data: { email, firstName }
                });
            });
    }
};

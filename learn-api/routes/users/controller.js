const { user: users } = require("../../models");
const { get, JWT_SECRET_KEY } = require("../../config");
const objectId = require("mongodb").ObjectId;
const { hashPassword, comparedPassword } = require("../../helpers");
const jwt = require("jsonwebtoken");

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
    addOne: async (req, res) => {
        const hash = await hashPassword(req.body.password);

        get()
            .collection("users")
            .insertOne({ ...req.body, password: hash, image: req.file.path })
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
    login: async (req, res) => {
        const { body } = req;

        get()
            .collection("users")
            .findOne({ email: body.email })
            .then(async response => {
                const compared = await comparedPassword(
                    req.body.password,
                    response.password
                );

                if (compared === true) {
                    const { _id, email, firstName } = response;
                    const token = jwt.sign(
                        { id: _id, email, firstName },
                        JWT_SECRET_KEY,
                        {
                            expiresIn: "30d"
                        }
                    );

                    res.status(200).json({
                        message: "Login successfull",
                        data: token
                    });
                }
            });
    }
};

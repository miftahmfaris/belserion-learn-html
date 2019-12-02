const { connection } = require("../../config");

module.exports = {
    getAll: (req, res) => {
        connection.query(`Select * From todo`, (error, results, fields) => {
            if (error) {
                res.status(500).send({ message: "there is something error" });
            } else {
                res.status(200).send({
                    message: "Show all datas",
                    data: results
                });
            }
        });
    },
    addOne: (req, res) => {
        connection.query(
            `INSERT INTO todo SET ?`,
            req.body,
            (error, results, fields) => {
                if (error) {
                    console.log(error);

                    res.status(500).send({
                        message: "there is something error"
                    });
                } else {
                    res.status(200).send({
                        message: "Add one data",
                        data: results
                    });
                }
            }
        );
    },
    updateOne: (req, res) => {
        connection.query(
            `UPDATE todo SET ? WHERE id = ?`,
            [req.body, `${req.params.id}`],
            (error, results, fields) => {
                if (error) {
                    console.log(error);

                    res.status(500).send({
                        message: "there is something error"
                    });
                } else {
                    res.status(200).send({
                        message: "Add one data",
                        data: results
                    });
                }
            }
        );
    },
    deleteOne: (req, res) => {
        connection.query(
            `DELETE FROM todo WHERE id = ?`,
            [req.params.id],
            (error, results, fields) => {
                if (error) {
                    console.log(error);

                    res.status(500).send({
                        message: "there is something error"
                    });
                } else {
                    res.status(200).send({
                        message: "Delete one data",
                        data: results
                    });
                }
            }
        );
    }
};

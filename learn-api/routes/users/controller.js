const { user: users } = require("../../models");

const getAll = (req, res) => {
    res.send(users);
};

module.exports = {
    getAll
};

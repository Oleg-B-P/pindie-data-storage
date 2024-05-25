const users = require("../models/users");

const findAllUsers = async (req, res, next) => {
    req.usersArray = await users.find({});
    next();
};

const FindUserById = async (req, res, next) => {
    console.log(`GET /users/${req.params.id}`);
    try {
        req.user = await users.findById(req.params.id);
        next();
    } catch (error) {
        res.status(404).send({ message: "User not found" });
    }
};

const createUser = async (req, res, next) => {
    console.log("POST /users");
    try {
        console.log(req.body);
        req.user = await users.create(req.body);
        next();
    } catch (error) {
        console.log(error)
        res.status(400).send({ message: "Error while creating user" });
    }
}

const deleteUser = async (req, res, next) => {
    console.log(`DELETE /user/${req.params.id}`);
    try {
        req.users = await users.findByIdAndDelete(req.params.id);
        next();
    } catch (error) {
        console.log(error);
        res.status(400).send({ message: "Error while users deleting" });
    }
}

const updateUser = async (req, res, next) => {
    console.log(`PUT /user/${req.params.id}`);
    try {
        if (req.body.name || req.body.email) {
            req.user = await users.findByIdAndUpdate(req.params.id, req.body);
            next();
        } else {
            res
                .status(400)
                .send({ message: "Error while user updating: body is empty" });
        }
    } catch (error) {
        console.log(error);
        res.status(400).send({ message: "Error while user updating" });
    }
}

module.exports = {
    findAllUsers,
    FindUserById,
    createUser,
    deleteUser,
    updateUser,
};
const usersRouter = require("express").Router();

const { sendAllUsers, sendUserById, sendUserCreated, sendUserDeleted, sendUserUpdated } = require("../controllers/users");
const { findAllUsers, FindUserById, createUser, deleteUser, updateUser } = require("../middlewares/users");


usersRouter.get("/users", findAllUsers, sendAllUsers)
usersRouter.get("/users/:id", findAllUsers, FindUserById, sendUserById);
usersRouter.post("/users", createUser, sendUserCreated);
usersRouter.delete("/users/:id", deleteUser, sendUserDeleted);
usersRouter.put("/users/:id", FindUserById, updateUser, sendUserUpdated);

module.exports = usersRouter;
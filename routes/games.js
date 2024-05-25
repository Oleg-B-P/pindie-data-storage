const { sendAllGames, sendGameById, sendGameCreated, sendGameDeleted, sendGameUpdated } = require("../controllers/games");
const { findAllGames, findGameById, createGame, deleteGame, updateGame } = require("../middlewares/games");

const gamesRouter = require("express").Router();

gamesRouter.get("/games", findAllGames, sendAllGames);
gamesRouter.get("/games/:id", findGameById, sendGameById);
gamesRouter.post("/games", createGame, sendGameCreated);
gamesRouter.delete("/games/:id", deleteGame, sendGameDeleted);
gamesRouter.put("/games/:id", updateGame, sendGameUpdated);

module.exports = gamesRouter;
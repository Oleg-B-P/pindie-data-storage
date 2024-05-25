const { sendAllCategories, sendCategoryById, sendCategoryCreated, sendCategoryDeleted, sendCategoryUpdated } = require("../controllers/categories");
const { findAllCategories, FindCategoryById, createCategory, deleteCategory, updateCategory } = require("../middlewares/categories");

const categoriesRouter = require("express").Router();

categoriesRouter.get("/categories", findAllCategories, sendAllCategories)
categoriesRouter.get("/categories/:id", FindCategoryById, sendCategoryById);
categoriesRouter.post("/categories", createCategory, sendCategoryCreated)
categoriesRouter.delete("/categories/:id", deleteCategory, sendCategoryDeleted)
categoriesRouter.put("/categories/:id", FindCategoryById, updateCategory, sendCategoryUpdated)

module.exports = categoriesRouter;
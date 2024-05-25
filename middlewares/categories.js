const categories = require("../models/categories");

const findAllCategories = async (req, res, next) => {
    req.categoriesArray = await categories.find({});
    next();
};

const FindCategoryById = async (req, res, next) => {
    console.log(`GET /categories/${req.params.id}`);
    try {
        req.category = await categories.findById(req.params.id);
        next();
    } catch (error) {
        res.status(404).send({ message: "Category not found" });
    }
};

const createCategory = async (req, res, next) => {
    console.log("POST /categories");
    try {
        console.log(req.body);
        req.category = await categories.create(req.body);
        next();
    } catch (error) {
        res.status(400).send({ message: "Error while category creating" });
    }
}

const deleteCategory = async (req, res, next) => {
    console.log(`DELETE /category/${req.params.id}`);
    try {
        req.category = await categories.findByIdAndDelete(req.params.id);
        next();
    } catch (error) {
        console.log(error);
        res.status(400).send({ message: "Error while category deleting" });
    }
};

const updateCategory = async (req, res, next) => {
    console.log(`PUT /category/${req.params.id}`);
    try {
        req.category = await categories.findByIdAndUpdate(req.params.id, req.body);
        next();
    } catch (error) {
        console.log(error);
        res.status(400).send({ message: "Error while category updating" });
    }
}

module.exports = {
    findAllCategories,
    FindCategoryById,
    createCategory,
    deleteCategory,
    updateCategory,
};
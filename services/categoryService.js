
const Category = require('../models/category');
const Service = require('../models/service');


async function createCategory(req, res) {
  try {
    const category = await Category.create(req.body);
    res.status(201).json(category);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}


async function getAllCategories(req, res) {
  try {
    const categories = await Category.findAll();
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}


async function updateCategory(req, res) {
  try {
    const { categoryId } = req.params;
    const category = await Category.findByPk(categoryId);
    if (!category) return res.status(404).json({ error: 'Category not found' });

    await category.update(req.body);
    res.status(200).json(category);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}


async function deleteCategory(req, res) {
  try {
    const { categoryId } = req.params;
    const services = await Service.findAll({ where: { categoryId } });
    if (services.length > 0) return res.status(400).json({ error: 'Category is not empty' });

    await Category.destroy({ where: { id: categoryId } });
    res.status(200).json({ message: 'Category deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = { createCategory, getAllCategories, updateCategory, deleteCategory };


const express = require('express');
const { authenticateToken } = require('../middleware/authMiddleware');
const { createCategory, getAllCategories, updateCategory, deleteCategory } = require('../services/categoryService');
const router = express.Router();


router.post('/category', authenticateToken,createCategory)
router.get('/categories', authenticateToken, getAllCategories);
router.put('/category/:categoryId', authenticateToken, updateCategory);
router.delete('/category/:categoryId', authenticateToken, deleteCategory);

module.exports = router;

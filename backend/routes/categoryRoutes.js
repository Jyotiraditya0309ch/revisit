const express = require('express');
const { addCategory, getCategories, updateCategory } = require('../controllers/categoryController');
const router = express.Router();

router.post('/categories', addCategory);
router.get('/categories', getCategories);
router.put('/categories/:id', updateCategory);

module.exports = router;

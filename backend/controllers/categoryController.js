const Category = require('../models/Category');

exports.addCategory = async (req, res) => {
  const { name, imageUrl, itemCount } = req.body;
  const category = new Category({ name, imageUrl, itemCount });
  await category.save();
  res.status(201).json(category);
};

exports.getCategories = async (req, res) => {
  const categories = await Category.find();
  res.json(categories);
};

exports.updateCategory = async (req, res) => {
  const { name, itemCount, imageUrl } = req.body;

  try {
    const category = await Category.findByIdAndUpdate(
      req.params.id,
      { name, itemCount, imageUrl },
      { new: true }
    );

    if (!category) {
      return res.status(404).json({ message: 'Category not found' });
    }

    res.json(category);
  } catch (err) {
    console.error('Error updating category:', err);
    res.status(500).json({ message: 'Server error' });
  }
};

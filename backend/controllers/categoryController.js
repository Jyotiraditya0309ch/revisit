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
  const { itemCount, imageUrl } = req.body;
  const category = await Category.findByIdAndUpdate(req.params.id, { itemCount, imageUrl }, { new: true });
  res.json(category);
};

import React, { useState } from 'react';
import axiosInstance from '../utils/axiosInstance';

function EditCategoryForm({ category, onClose, onCategoryUpdated }) {
  const [name, setName] = useState(category.name);
  const [count, setItemCount] = useState(category.itemCount);
  const [imageUrl, setImageUrl] = useState(category.imageUrl);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axiosInstance.put(`/categories/${category._id}`, {
        name,
        itemCount: count,
        imageUrl,
      });
      if (res.data) {
        onCategoryUpdated(res.data);
      }
      onClose();
    } catch (err) {
      console.error('Failed to update category:', err);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 w-96 z-50">
      <h2 className="text-xl font-bold mb-4">Edit Category</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-600">Name</label>
          <input
            className="w-full border rounded px-3 py-2"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label className="block mb-2 font-medium">Item Count</label>
          <input
            type="number"
            className="w-full mb-4 p-2 border border-gray-300 rounded"
            value={count}
            onChange={(e) => setItemCount(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-gray-600">Image URL</label>
          <input
            className="w-full border rounded px-3 py-2"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />
        </div>
        <div className="flex justify-end gap-2">
          <button
            type="button"
            className="bg-gray-300 px-4 py-2 rounded"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditCategoryForm;

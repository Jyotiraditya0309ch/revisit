import React, { useState } from 'react';
import axiosInstance from '../utils/axiosInstance';

function AddCategoryForm({ onCategoryAdded, onCancel }) {
  const [name, setName] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [itemCount, setItemCount] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post('/categories', {
        name,
        imageUrl,
        itemCount,
      });
      onCategoryAdded(response.data);
    } catch (error) {
      console.error('Failed to add category:', error);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 z-50">
      <div className="bg-white rounded-lg shadow-md p-6 w-96">
        <h2 className="text-xl font-semibold mb-4">Add Category</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-medium">Name</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded px-3 py-2"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block font-medium">Image URL</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded px-3 py-2"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block font-medium">Item Count</label>
            <input
              type="number"
              className="w-full border border-gray-300 rounded px-3 py-2"
              value={itemCount}
              onChange={(e) => setItemCount(e.target.value)}
              required
            />
          </div>
          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={onCancel}
              className="bg-gray-300 px-4 py-2 rounded"
            >
              Cancel
            </button>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddCategoryForm;

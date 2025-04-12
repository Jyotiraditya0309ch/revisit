import React, { useState } from 'react';
import EditCategoryForm from './EditCategoryForm';

function CategoryCard({ category }) {
  const [hovered, setHovered] = useState(false);
  const [showEdit, setShowEdit] = useState(false);

  return (
    <div
      className="bg-white rounded-md shadow-md relative group max-w-xs w-full"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative h-56">
        <img src={category.imageUrl} alt={category.name} className="w-full h-full object-cover rounded-t-md" />
        {hovered && (
          <button
            className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity"
            onClick={() => setShowEdit(true)}
          >
            Edit
          </button>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-gray-800">{category.name}</h3>
        <p className="text-gray-500">{category.itemCount || 0} items</p>
      </div>

      {showEdit && (
        <div className="absolute inset-0 bg-white bg-opacity-95 p-4 z-20">
          <EditCategoryForm
            category={category}
            onClose={() => setShowEdit(false)}
          />
        </div>
      )}
    </div>
  );
}

export default CategoryCard;

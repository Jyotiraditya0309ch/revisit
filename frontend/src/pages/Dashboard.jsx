import React, { useEffect, useState } from 'react';
import axiosInstance from '../utils/axiosInstance';
import AddCategoryForm from '../components/AddCategoryForm';
import CategoryCard from '../components/CategoryCard';
import TopNavBar from '../components/TopNavBar';
import Sidebar from '../components/Sidebar';


function Dashboard() {
  const [categories, setCategories] = useState([]);
  const [showAddForm, setShowAddForm] = useState(false);

  const fetchCategories = async () => {
    try {
      const res = await axiosInstance.get('/categories');
      setCategories(res.data);
    } catch (err) {
      console.error('Failed to fetch categories:', err);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleAddCategory = (newCategory) => {
    setCategories([...categories, newCategory]);
    setShowAddForm(false);
  };

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <TopNavBar />
        <div className="p-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">Categories</h2>
            <button
              className="bg-blue-600 text-white px-4 py-2 rounded"
              onClick={() => setShowAddForm(true)}
            >
              Add Category
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {categories.map((cat) => (
              <CategoryCard key={cat._id} category={cat} />
            ))}
          </div>
        </div>
      </div>
      {showAddForm && (
        <AddCategoryForm
          onCategoryAdded={handleAddCategory}
          onCancel={() => setShowAddForm(false)}
        />
      )}
    </div>
  );
}

export default Dashboard;

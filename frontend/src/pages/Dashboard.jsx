import React, { useEffect, useState } from 'react';
import axiosInstance from '../utils/axiosInstance';
import AddCategoryForm from '../components/AddCategoryForm';
import CategoryCard from '../components/CategoryCard';
import TopNavBar from '../components/TopNavBar';
import Sidebar from '../components/Sidebar';

function Dashboard() {
  const [categories, setCategories] = useState([]);
  const [showAddForm, setShowAddForm] = useState(false);

  const defaultCategories = [
    {
      _id: '1',
      name: 'Electronics',
      imageUrl: 'https://cdn.shopify.com/s/files/1/0552/3269/2430/articles/learning-electronics-comprehensive-guide-for-beginners.webp?v=1702560862',
      itemCount: 14,
    },
    {
      _id: '2',
      name: 'Clothing',
      imageUrl: 'https://www.permanentstyle.com/wp-content/uploads/2021/04/hang-up-vintage-london-580x464.jpg',
      itemCount: 22,
    },
    {
      _id: '3',
      name: 'Home Decor',
      imageUrl: 'https://assets.architecturaldigest.in/photos/62026064b5d9eefa7e4e2ddf/4:3/w_1439,h_1079,c_limit/How%20to%20furnish%20your%20home%20on%20a%20budget.jpg',
      itemCount: 8,
    },
    {
      _id: '4',
      name: 'Books',
      imageUrl: 'https://imageio.forbes.com/specials-images/imageserve/66cc9d9ffc537cb99b7a3440/0x0.jpg?format=jpg&crop=1884,1256,x0,y0,safe&height=900&width=1600&fit=bounds',
      itemCount: 30,
    },
  ];

  const fetchCategories = async () => {
    try {
      const res = await axiosInstance.get('/categories');
      if (res.data && res.data.length > 0) {
        setCategories(res.data);
      } else {
        setCategories(defaultCategories);
      }
    } catch (err) {
      console.error('Failed to fetch categories:', err);
      setCategories(defaultCategories);
    }
  };
  
// eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    fetchCategories();
  }, []);

  const handleAddCategory = (newCategory) => {
    setCategories([...categories, newCategory]);
    setShowAddForm(false);
  };

  const handleUpdateCategory = (updatedCategory) => {
    const updated = categories.map(cat =>
      cat._id === updatedCategory._id ? updatedCategory : cat
    );
    setCategories(updated);
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
              <CategoryCard
                key={cat._id}
                category={cat}
                onEdit={handleUpdateCategory}
              />
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

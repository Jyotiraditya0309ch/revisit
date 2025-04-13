import React, { useEffect, useState } from 'react';
import axiosInstance from '../utils/axiosInstance';

function TopNavBar() {
  const [userName, setUserName] = useState('');


  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) return;
    const fetchUser = async () => {
        try {
          const res = await axiosInstance.get('/user', {
            headers: {
              Authorization: `Bearer ${token}`,
            },})
          setUserName(res.data.name);
        } catch (err) {
          console.error('Failed to fetch user info');
        }
      };
      fetchUser();
  }, []);
  

  return (
    <header className="h-16 flex items-center justify-end px-6 bg-white shadow-sm">
      <div className="flex items-center">
        <p className="mr-4 text-gray-700 font-medium">{userName}</p>
        <div className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center">
          {userName.charAt(0).toUpperCase() || '?'}
        </div>
      </div>
    </header>
  );
}
export default TopNavBar;

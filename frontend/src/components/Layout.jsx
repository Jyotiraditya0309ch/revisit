import React from 'react';
import TopNavBar from './TopNavBar';

function Layout({ children }) {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <TopNavBar />
        <main className="p-6 overflow-auto">{children}</main>
      </div>
    </div>
  );
}

export default Layout;

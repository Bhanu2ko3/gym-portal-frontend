"use client"
import React, { useState } from 'react';
import Sidebar from './components/sidebar';
import DashboardHeader from './components/Header';

export default function Layout({ children }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSidebarItemClick = (itemName) => {
    setSearchQuery(itemName);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="fixed lg:relative h-screen z-50">
        <Sidebar onItemClick={handleSidebarItemClick} />
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto">
        {/* Dashboard Header with Search Bar */}
        <DashboardHeader onSearch={handleSearch} searchQuery={searchQuery} />

        {/* Page Content */}
        {children}
      </div>
    </div>
  );
}
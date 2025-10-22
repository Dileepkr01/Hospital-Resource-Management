import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header({ theme, toggleTheme }) {
  const location = useLocation();

  // Define your nav items and their paths
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    // { name: 'Services', path: '/services' },
    { name: 'Login', path: '/login' },
  ];

  return (
    <header className="bg-white dark:bg-gray-800 shadow-sm sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center p-4 border-b dark:border-gray-700">
        {/* Logo Section */}
        <div className="flex items-center space-x-3">
          <div className="bg-blue-600 p-2 rounded-lg flex items-center justify-center h-10 w-10">
            <span className="text-xl">🩺</span>
          </div>
          <h1 className="text-xl font-bold text-gray-700 dark:text-gray-200 hidden sm:block">
            Hospital Analytics
          </h1>
        </div>

        {/* Navigation Section */}
        <div className="flex items-center space-x-4">
          <nav className="flex items-center space-x-1 sm:space-x-2">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`px-3 sm:px-5 py-2 rounded-lg font-medium text-sm transition-colors duration-200 border-2 ${
                    isActive
                      ? 'bg-blue-600 text-white border-blue-600'
                      : 'bg-white dark:bg-gray-700 text-gray-600 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-600 hover:border-gray-400 dark:hover:border-gray-500'
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg border-2 border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 text-xl"
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
        </div>
      </div>
    </header>
  );
}

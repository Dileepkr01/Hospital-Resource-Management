import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Moon, Sun, User } from "lucide-react"; // ✅ modern icons


export default function Header({ theme, toggleTheme }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    navigate("/login");
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
  ];

  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm sticky top-0 z-10 transition-colors duration-300">
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

        {/* Navigation + User + Theme */}
        <div className="flex items-center space-x-4">
          {/* Navigation */}
          <nav className="flex items-center space-x-1 sm:space-x-2">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`px-3 sm:px-5 py-2 rounded-lg font-medium text-sm transition-all duration-200 border ${
                    isActive
                      ? "bg-blue-600 text-white border-blue-600"
                      : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* ✅ User Icon & Logout Menu */}
          {user ? (
            <div className="relative">
              <button
                onClick={() => setShowMenu(!showMenu)}
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition"
              >
                <User className="text-gray-700 dark:text-gray-200 w-5 h-5" />
              </button>

              {showMenu && (
                <div className="absolute right-0 mt-2 bg-white dark:bg-gray-800 rounded-lg shadow-lg border dark:border-gray-700 z-10">
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left text-red-600 px-6 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link
              to="/login"
              className="text-blue-600 dark:text-blue-400 font-semibold text-sm px-3 py-2 border-2 border-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition"
            >
              Login
            </Link>
          )}

          {/* ✅ Theme Toggle with Lucide Icons */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            {theme === "light" ? (
              <Moon className="w-5 h-5 text-gray-700" />
            ) : (
              <Sun className="w-5 h-5 text-yellow-400" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
}










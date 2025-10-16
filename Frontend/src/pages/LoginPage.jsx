import React from 'react';
import { Link } from 'react-router-dom';

export default function LoginPage() {
  return (
    <div className="p-8 flex items-center justify-center min-h-[80vh]">
      <div className="bg-white dark:bg-gray-800 p-10 rounded-2xl shadow-lg max-w-md w-full">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-2 text-center">
          Sign In
        </h1>
        <p className="text-gray-500 dark:text-gray-400 mb-8 text-center">
          Please log in to access your dashboard.
        </p>

        <form>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-600 dark:text-gray-300 font-medium mb-2"
            >
              Email Address
            </label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg 
                         focus:outline-none focus:ring-2 focus:ring-blue-500 
                         bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-gray-600 dark:text-gray-300 font-medium mb-2"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg 
                         focus:outline-none focus:ring-2 focus:ring-blue-500 
                         bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-lg 
                       hover:bg-blue-700 focus:outline-none focus:ring-2 
                       focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-300"
          >
            Log In
          </button>

          <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-6">
            <Link to="/signup" className="font-medium text-blue-600 hover:underline dark:text-blue-400">
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

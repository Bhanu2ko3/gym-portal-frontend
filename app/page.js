"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; // Make sure you're using `next/navigation` in the app directory

const page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isMounted, setIsMounted] = useState(false); // State to check if mounted

  const router = useRouter(); // Initialize the router

  useEffect(() => {
    setIsMounted(true); // Set mounted state to true when the component mounts
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    if (!email || !password) {
      setError("Please fill in both fields.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Invalid email format.");
      return;
    }
    // Handle successful login (e.g., API call)
    console.log("Login successful with", { email, password });

    // Redirect to the admin/dashboard page, ensure router is available
    if (isMounted) {
      router.push("/admin/dashboard"); // Use router.push for redirection
    }
  };

  if (!isMounted) return null; // Prevent rendering until the component is mounted

  return (
    <div className="flex items-center justify-center min-h-screen bg-[var(--tertiary-color)]">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">
          Login
        </h2>
        {error && <p className="text-red-500 text-sm text-center mb-4">{error}</p>}
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-[var(--primary-color)] focus:border-[var(--primary-color)]"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-[var(--primary-color)] focus:border-[var(--primary-color)]"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[var(--primary-color)] text-white py-2 rounded-lg hover:bg-opacity-90 transition"
          >
            Sign In
          </button>
        </form>
        <p className="text-sm text-gray-500 text-center mt-4">
          Don't have an account? <a href="#" className="text-[var(--primary-color)] font-medium">Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default page;

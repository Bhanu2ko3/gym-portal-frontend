import React, { useState } from "react";
import Button from "../../../components/Button";

const GymSettings = () => {
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add logic to handle the form submission, e.g., making an API request to save settings
    console.log("Form submitted:", formData);
  };

  return (
    <div className="w-full p-6 rounded-lg">
      <h1 className="text-lg font-medium mb-2 ml-5">Gym Settings</h1>
      <p className="text-gray-500 mb-6 ml-5">
        Change the gym name, address, time settings and more.
      </p>
      <div className="pt-4 bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-medium mb-4 border-b-3 border-gray-200 pb-4">
          General Settings
        </h2>
        <form className="space-y-6 " onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
            <div>
              <label className="block text-gray-700">Name</label>
              <input
                type="text"
                placeholder="First Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full border border-[var(--quaternary-color)] rounded-md  shadow-sm p-2 focus:outline-none focus:ring-2 focus:ring-[var(--quaternary-color)] focus:border-transparent "
                maxLength="50" // Limit Name to 50 characters
              />
            </div>
            <div>
              <label className="block text-gray-700">Phone Number</label>
              <input
                type="text"
                placeholder="Phone Number"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="mt-1 block w-full border border-[var(--quaternary-color)] rounded-md shadow-sm p-2 focus:outline-none focus:ring-2 focus:ring-[var(--quaternary-color)] focus:border-transparent"
                maxLength="15" // Limit Phone Number length
              />
            </div>
            <div>
              <label className="block text-gray-700">Email Address</label>
              <input
                type="email"
                placeholder="Email Address"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full border border-[var(--quaternary-color)]  rounded-md shadow-sm p-2 focus:outline-none focus:ring-2 focus:ring-[var(--quaternary-color)] focus:border-transparent"
                maxLength="100" // Limit Email length
              />
            </div>
            <br />
            <div>
              <label className="block text-gray-700">Password</label>
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="mt-1 block w-full border border-[var(--quaternary-color)] rounded-md shadow-sm p-2 focus:outline-none focus:ring-2 focus:ring-[var(--quaternary-color)] focus:border-transparent"
                maxLength="20" // Limit Password length
              />
            </div>
            <div>
              <label className="block text-gray-700">Confirm Password</label>
              <input
                type="password"
                placeholder="Confirm Password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="mt-1 block w-full border border-[var(--quaternary-color)] rounded-md shadow-sm p-2 focus:outline-none focus:ring-2 focus:ring-[var(--quaternary-color)] focus:border-transparent"
                maxLength="20" // Limit Confirm Password length
              />
            </div>
          </div>

          <div className="flex justify-center mt-15 mb-10">
            <Button
            
              text="Save Settings"
              onClick={() => console.log("Clicked!")}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default GymSettings;

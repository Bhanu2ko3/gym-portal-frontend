import React, { useState } from "react";

const MemberDetails = () => {
  const [memberType, setMemberType] = useState("Member");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    secondaryPhone: "",
    secondaryEmail: "",
    gender: "",
    dob: "",
    streetAddress: "",
    city: "",
    contactName: "",
    contactPhone: "",
    relation: "Parent",
    checkInCode: "",
    confirmCheckInCode: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="bg-gray-100 p-4">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <div className="text-lg font-semibold">Programs</div>
        <button className="text-blue-600">Log Out</button>
      </div>

      {/* Member Details */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold mb-2">Member Details</h2>
        <div className="flex items-center mb-4">
          <label className="mr-4">
            <input
              type="radio"
              name="memberType"
              value="Visitor"
              checked={memberType === "Visitor"}
              onChange={() => setMemberType("Visitor")}
              className="mr-2"
            />
            Visitor
          </label>
          <label>
            <input
              type="radio"
              name="memberType"
              value="Member"
              checked={memberType === "Member"}
              onChange={() => setMemberType("Member")}
              className="mr-2"
            />
            Member
          </label>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {["firstName", "lastName", "phoneNumber", "email", "secondaryPhone", "secondaryEmail", "gender", "dob"].map((field, index) => (
            <div key={index}>
              <label className="block text-gray-700 capitalize">{field.replace(/([A-Z])/g, " $1")}</label>
              {field === "gender" ? (
                <select name={field} value={formData[field]} onChange={handleChange} className="w-full p-2 border rounded">
                  <option>Select</option>
                  <option>Male</option>
                  <option>Female</option>
                </select>
              ) : (
                <input
                  type={field === "dob" ? "date" : "text"}
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                />
              )}
            </div>
          ))}
        </div>
        <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded">Find Me</button>
      </div>

      {/* Address */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold mb-2">Address</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {["streetAddress", "city"].map((field, index) => (
            <div key={index}>
              <label className="block text-gray-700 capitalize">{field.replace(/([A-Z])/g, " $1")}</label>
              <input
                type="text"
                name={field}
                value={formData[field]}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Contacts */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Contacts</h2>
          <button className="bg-blue-600 text-white py-2 px-4 rounded">Additional Contact</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {["contactName", "contactPhone"].map((field, index) => (
            <div key={index}>
              <label className="block text-gray-700 capitalize">{field.replace(/([A-Z])/g, " $1")}</label>
              <input
                type="text"
                name={field}
                value={formData[field]}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
            </div>
          ))}
          <div>
            <label className="block text-gray-700">Relation</label>
            <select name="relation" value={formData.relation} onChange={handleChange} className="w-full p-2 border rounded">
              <option>Parent</option>
            </select>
          </div>
        </div>
      </div>

      {/* Photo */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold mb-2">Photo</h2>
        <div className="flex items-center space-x-4">
          <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center">
            <i className="fas fa-camera text-2xl text-gray-500"></i>
          </div>
          <button className="bg-white border py-2 px-4 rounded shadow">Capture from camera</button>
          <button className="bg-white border py-2 px-4 rounded shadow">Upload Photo</button>
        </div>
      </div>

      {/* Account Security */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-2">Account Security</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {["checkInCode", "confirmCheckInCode"].map((field, index) => (
            <div key={index}>
              <label className="block text-gray-700 capitalize">{field.replace(/([A-Z])/g, " $1")}</label>
              <input
                type="text"
                name={field}
                value={formData[field]}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
            </div>
          ))}
        </div>
        <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded">Register Finger Print</button>
      </div>
    </div>
  );
};

export default MemberDetails;

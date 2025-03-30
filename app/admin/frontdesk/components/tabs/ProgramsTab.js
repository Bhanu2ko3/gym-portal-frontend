import React, { useState } from "react";
import Button from "../../../components/Button";

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

  const validate = () => {
    let newErrors = {};
  
    if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.phoneNumber.trim()) newErrors.phoneNumber = "Phone number is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
  
    if (formData.phoneNumber && !/^\d{10}$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = "Phone number must be 10 digits";
    }
  
    if (formData.secondaryPhone && !/^\d{10}$/.test(formData.secondaryPhone)) {
      newErrors.secondaryPhone = "Phone number must be 10 digits";
    }
  
    if (formData.checkInCode !== formData.confirmCheckInCode) {
      newErrors.confirmCheckInCode = "Check-in codes do not match";
    }
  
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  
    // Live validation
    validate();
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form Submitted Successfully!", formData);
    }
  };
  

  

  return (
    <div className="rounded-lg h-full">
      <div className="pt-4 bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-medium mb-4 pb-4">Member Details</h2>
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
          <Button
            text="Find Me"
            className={" ml-auto"}
            onClick={() => console.log("Clicked!")}
          />
        </div>

        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "firstName",
              "lastName",
              "phoneNumber",
              "email",
              "secondaryPhone",
              "secondaryEmail",
              "gender",
              "dob",
              "pickACheckInCode",
              "joinDate",
            ].map((field, index) => (
              <div key={index}>
                <label className="block text-gray-700 capitalize">
                  {field.replace(/([A-Z])/g, " $1")}
                </label>
                {field === "gender" ? (
                  <select
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-[var(--quaternary-color)] rounded-md shadow-sm p-2 focus:outline-none focus:ring-2 focus:ring-[var(--quaternary-color)] focus:border-transparent"
                  >
                    <option>Select</option>
                    <option>Male</option>
                    <option>Female</option>
                  </select>
                ) : field === "joinDate" ? (
                  <input
                    type="date"
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-[var(--quaternary-color)] rounded-md shadow-sm p-2 focus:outline-none focus:ring-2 focus:ring-[var(--quaternary-color)] focus:border-transparent"
                  />
                ) : (
                  <input
                    type={field === "dob" ? "date" : "text"}
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                    placeholder={`Enter ${field.replace(/([A-Z])/g, " $1")}`}
                    className="mt-1 block w-full border border-[var(--quaternary-color)] rounded-md shadow-sm p-2 focus:outline-none focus:ring-2 focus:ring-[var(--quaternary-color)] focus:border-transparent"
                  />
                )}
              </div>
            ))}
          </div>
        </form>
      </div>

      {/* Address */}
      <div className="pt-4 bg-white shadow-md rounded-lg p-6 mt-6">
        <h2 className="text-xl font-medium mb-4  pb-3">Address</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {["streetAddress", "city"].map((field, index) => (
            <div key={index}>
              <label className="block text-gray-700 capitalize">
                {field.replace(/([A-Z])/g, " $1")}
              </label>
              <input
                type="text"
                name={field}
                value={formData[field]}
                onChange={handleChange}
                placeholder={`Enter ${field.replace(/([A-Z])/g, " $1")}`}
                className="mt-1 block w-full border border-[var(--quaternary-color)] rounded-md shadow-sm p-2 focus:outline-none focus:ring-2 focus:ring-[var(--quaternary-color)] focus:border-transparent"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Contacts */}
      <div className="pt-4 bg-white shadow-md rounded-lg p-6 mt-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-medium">Contacts</h2>
          <Button
            text="Additional Contact"
            className={" mt-4"}
            onClick={() => console.log("Clicked!")}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {["contactName", "contactPhone"].map((field, index) => (
            <div key={index}>
              <label className="block text-gray-700 capitalize">
                {field.replace(/([A-Z])/g, " $1")}
              </label>
              <input
                type="text"
                name={field}
                value={formData[field]}
                onChange={handleChange}
                placeholder={`Enter ${field.replace(/([A-Z])/g, " $1")}`}
                className="mt-1 block w-full border border-[var(--quaternary-color)] rounded-md shadow-sm p-2 focus:outline-none focus:ring-2 focus:ring-[var(--quaternary-color)] focus:border-transparent"
              />
            </div>
          ))}
          <div>
            <label className="block text-gray-700">Relation</label>
            <select
              name="relation"
              value={formData.relation}
              onChange={handleChange}
              className="mt-1 block w-full border border-[var(--quaternary-color)] rounded-md shadow-sm p-2 focus:outline-none focus:ring-2 focus:ring-[var(--quaternary-color)] focus:border-transparent"
            >
              <option>Parent</option>
            </select>
          </div>
        </div>
      </div>

      {/* Photo */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6 mt-6">
        <h2 className="text-xl font-semibold mb-4">Photo</h2>
        <div className="flex items-center space-x-4">
          <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center">
            <i className="fas fa-camera text-2xl text-gray-500"></i>
          </div>
          <button className="bg-white border border-gray-300 cursor-pointer text-gray-600 hover:bg-gray-200 transition duration-300 py-2 px-4 rounded-full shadow">
            Capture from camera
          </button>
          <button className="bg-white border border-gray-300 text-gray-600 cursor-pointer hover:bg-gray-200 transition duration-300 py-2 px-6 rounded-full shadow">
            Upload Photo
          </button>
        </div>
      </div>

      {/* Account Security */}
      <div className="pt-4 bg-white shadow-md rounded-lg p-6 mt-6">
        <h2 className="text-xl font-medium mb-4 ">Account Security</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {["checkInCode", "confirmCheckInCode"].map((field, index) => (
            <div key={index}>
              <label className="block text-gray-700 capitalize">
                {field.replace(/([A-Z])/g, " $1")}
              </label>
              <input
                type="text"
                name={field}
                value={formData[field]}
                onChange={handleChange}
                placeholder={`Enter ${field.replace(/([A-Z])/g, " $1")}`}
                className="mt-1 block w-full border border-[var(--quaternary-color)] rounded-md shadow-sm p-2 focus:outline-none focus:ring-2 focus:ring-[var(--quaternary-color)] focus:border-transparent"
              />
            </div>
          ))}
          <Button
            text="Register Finger Print"
            className={"m-2.5 ml-8 mt-7"}
            onClick={() => console.log("Clicked!")}
          />
        </div>
      </div>
    </div>
  );
};

export default MemberDetails;

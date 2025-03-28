import React from 'react';

const ProgramsTab = () => {
  const programs = [
    { name: "Circuit Training" },
    { name: "CrossFit" },
    { name: "Personal Training" },
    { name: "Spin" },
    { name: "Strength & Conditioning" },
    { name: "Weight Training" },
  ];

  const yogaPilates = [
    { name: "Yoga" },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-xl font-semibold text-gray-800">Manage Programs, Levels and Ranks</h1>
          <p className="text-gray-500">Manage the programs at your gym and the levels / ranks for each.</p>
        </div>
        <button className="bg-white text-gray-800 font-semibold py-2 px-4 border border-gray-300 rounded-full shadow-sm hover:bg-gray-50">
          Add Program
        </button>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Fitness Training</h2>
        <div className="border-t border-gray-200">
          {programs.map((program, index) => (
            <div key={index} className="flex justify-between items-center py-4">
              <span className="text-gray-800">{program.name}</span>
              <button className="bg-teal-600 text-white font-semibold py-2 px-4 rounded-full hover:bg-teal-700">Edit</button>
            </div>
          ))}
        </div>
        <h2 className="text-lg font-semibold text-gray-800 mt-8 mb-4">Yoga & Pilates</h2>
        <div className="border-t border-gray-200">
          {yogaPilates.map((program, index) => (
            <div key={index} className="flex justify-between items-center py-4">
              <span className="text-gray-800">{program.name}</span>
              <button className="bg-teal-600 text-white font-semibold py-2 px-4 rounded-full hover:bg-teal-700">Edit</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProgramsTab;

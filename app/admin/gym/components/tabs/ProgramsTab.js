import React from 'react';
import Button from "../../../components/Button";

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
          <h1 className="text-xl font-medium text-gray-800">Manage Programs, Levels and Ranks</h1>
          <p className="text-gray-500">Manage the programs at your gym and the levels / ranks for each.</p>
        </div>
        <button className="bg-white text-gray-800 font-semibold py-2 px-4 border border-gray-300 rounded-full shadow-sm hover:bg-gray-200 cursor-pointer transition duration-300">
          Add Program
        </button>
      </div>
      <div className=" p-6 rounded-lg ">
        <h2 className="text-lg font-medium text-gray-800 mb-4 block text-center">Fitness Training</h2>
        <div className="border-t border-gray-200 " >
          <br/>
          {programs.map((program, index) => (
            <div key={index} className="flex justify-between items-center py-2 ">
              <span className="text-gray-800">{program.name}</span>
              <Button text="Edit" onClick={() => console.log("Clicked!")} />
            </div>
          ))}
        </div>
        <h2 className="text-lg font-medium text-gray-800 mt-8 mb-4 text-center">Yoga & Pilates</h2>
        <div className="border-t border-gray-200">
          {yogaPilates.map((program, index) => (
            <div key={index} className="flex justify-between items-center py-4">
              <span className="text-gray-800">{program.name}</span>
              <Button text="Edit" onClick={() => console.log("Clicked!")} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProgramsTab;

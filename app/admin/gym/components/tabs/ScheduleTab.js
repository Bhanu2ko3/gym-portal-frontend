import React, { useState } from 'react';

const ScheduleTab = () => {
  const [currentDateRange, setCurrentDateRange] = useState('01/01/2025 - 01/07/2025');

  const handleCloseGym = () => {
    // Logic for closing the gym
    alert('Gym Closed');
  };

  const handlePrevious = () => {
    // Logic to go to the previous week
    alert('Previous week');
  };

  const handleNext = () => {
    // Logic to go to the next week
    alert('Next week');
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-bold">Gym Schedule</h1>
        <button
          className="bg-teal-600 text-white px-4 py-2 rounded-full"
          onClick={handleCloseGym}
        >
          Close GYM
        </button>
      </div>
      <div className="flex justify-between mb-6">
        <div>
          <h2 className="font-semibold">Manage Training Schedule</h2>
          <ul className="list-disc list-inside">
            <li>Click on a day to add a session to that day.</li>
            <li>Click on a session to edit it.</li>
            <li>Drag and drop an event to copy it.</li>
          </ul>
        </div>
        <div>
          <h2 className="font-semibold">Gym Closure</h2>
          <p>Hides the calendar on the gym website and optionally freezes all member accounts.</p>
        </div>
      </div>
      <div className="flex justify-between items-center bg-gray-100 p-2 rounded-lg">
        <button
          className="text-gray-600"
          onClick={handlePrevious}
        >
          &lt; Previous
        </button>
        <span className="text-gray-600">{currentDateRange}</span>
        <button
          className="text-gray-600"
          onClick={handleNext}
        >
          Next &gt;
        </button>
      </div>
      <div className="grid grid-cols-7 text-center mt-4 text-gray-500">
        <div>
          <p className="text-sm">5</p>
          <p className="text-xs">Sunday</p>
        </div>
        <div>
          <p className="text-sm">6</p>
          <p className="text-xs">Monday</p>
        </div>
        <div>
          <p className="text-sm">7</p>
          <p className="text-xs">Tuesday</p>
        </div>
        <div>
          <p className="text-sm">8</p>
          <p className="text-xs">Wednesday</p>
        </div>
        <div>
          <p className="text-sm">9</p>
          <p className="text-xs">Thursday</p>
        </div>
        <div>
          <p className="text-sm">10</p>
          <p className="text-xs">Friday</p>
        </div>
        <div>
          <p className="text-sm">11</p>
          <p className="text-xs">Saturday</p>
        </div>
      </div>
    </div>
  );
};

export default ScheduleTab;

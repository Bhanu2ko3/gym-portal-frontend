import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const OverviewTab = () => {
  // Create a ref to store the chart instance
  const chartRef = useRef(null);

  useEffect(() => {
    // Get the canvas element
    const ctx = document.getElementById('attendanceChart').getContext('2d');

    // Destroy the existing chart if it exists
    if (chartRef.current) {
      chartRef.current.destroy();
    }

    // Create a new chart instance and store it in the ref
    chartRef.current = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
          label: 'Attendance',
          data: [200, 150, 250, 300, 200, 100, 280],
          backgroundColor: 'rgba(54, 162, 235, 0.5)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });

    // Cleanup chart on component unmount
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, []);

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold">Last 30 days</h2>
            <p className="text-2xl">635 Members / Session</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold">Last 30 days</h2>
            <p className="text-2xl">635 Sessions / Member</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold">Last 30 days</h2>
            <p className="text-2xl">635 Active Members</p>
          </div>
        </div>

        {/* Demographics Section */}
        <div className="bg-white p-4 rounded-lg shadow mb-6">
          <h2 className="text-xl font-semibold">Demographics</h2>
          <p>No demographics data available yet. Add more members!</p>
        </div>

        {/* Attendance Section */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold">Check-Ins</h2>
          <h3 className="text-lg">Attendance</h3>
          <canvas id="attendanceChart" className="mt-4"></canvas>
        </div>
      <h2 className="text-xl font-semibold">Check-Ins</h2>
      <h3 className="text-lg">Attendance</h3>
      <canvas id="attendanceChart" className="mt-4"></canvas>
    </div>
  );
};

export default OverviewTab;

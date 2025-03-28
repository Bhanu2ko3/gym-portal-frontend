import React from 'react'

const ContentTab = () => {
  return (
    <div className=" bg-white rounded-lg shadow-md w-full h-full ">
      {/* Header Section */}
      <div className="flex justify-between items-center bg-blue-200 p-4 rounded-lg">
        <h2 className="text-lg font-semibold text-gray-900">Member Portal Content</h2>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
          Add Rosters
        </button>
      </div>

      {/* Empty State Section */}
      <div className="flex flex-col items-center justify-center h-48">
        <p className="text-gray-500">Create content exclusively for your members including training materials, instructional videos and more.</p>
      </div>

      {/* New Membership Option Button */}
      <div className="mt-6 flex justify-center">
        <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500">
          Add a new Post
        </button>
      </div>
    </div>
  );
}

export default ContentTab
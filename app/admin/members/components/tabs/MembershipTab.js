export default function Widget() {
  return (
    <div className=" bg-white rounded-lg shadow-md h-full ">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-4 bg-blue-200 p-4 rounded-lg ">
        <h2 className="text-lg font-semibold text-gray-900">Membership Options</h2>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
          Add Membership Option
        </button>
      </div>

      {/* Empty State Section */}
      <div className="flex flex-col items-center justify-center h-48">
        <p className="text-gray-500">No membership options have been added yet.</p>
      </div>

      {/* New Membership Option Button */}
      <div className="mt-6 flex justify-center py-4">
        <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500">
          New Membership Option
        </button>
      </div>
    </div>
  );
}
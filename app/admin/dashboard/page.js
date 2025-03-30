"use client";

export default function Dashboard() {

  const stats = [
    { id: 1, value: 635, label: 'total active members' },
    { id: 2, value: 635, label: 'Membership renewals' },
    { id: 3, value: 635, label: 'Membership renewals' },
    { id: 4, value: 635, label: 'Membership renewals' },
  ];

  const scheduleItems = [];
  const notifications = [];

  return (
    <div className="flex flex-col lg:flex-row bg-[var(--tertiary-color)] h-screen ">
  <div className="flex-1 flex flex-col ">
    <main className="flex-1 bg-[var(--tertiary-color)]">
      <div className="py-6 sm:px-3 lg:px-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {stats.map((stat) => (
            <div key={stat.id} className="bg-white p-4 rounded-lg shadow-md">
              <div className="text-2xl font-medium">{stat.value}</div>
              <div className="text-sm text-[var(--primary-color)] capitalize">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Schedule Today Section */}
        <div className="bg-white rounded-lg shadow-md p-4 h-124 ">
          <h2 className="text-lg text-gray-700 ml-3">Schedule Today</h2>
          <div className="min-h-80">
            {scheduleItems.length > 0 ? (
              <div>
                {/* Schedule items would go here */}
              </div>
            ) : (
              <div className="min-h-64 flex items-center justify-center text-gray-400">
                {/* Empty state or loading indicator could go here */}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  </div>

  {/* Notifications Panel */}
  <div className="w-full lg:w-64 lg:h-150 min-h-80 bg-white mt-6 lg:mr-4 mb-6 shadow-md rounded-lg">
    <div className="p-4 border-b border-gray-200">
      <h1 className="ml-1 text-gray-700 text-lg">Notifications</h1>
    </div>
    <div className="">
      {notifications.length > 0 ? (
        <div className="p-4">
          {/* Notification items would go here */}
        </div>
      ) : (
        <div className="p-4 text-sm text-gray-500">
          No new notifications
        </div>
      )}
    </div>
  </div>
</div>


  );
}

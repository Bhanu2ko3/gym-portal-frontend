import React, { useState } from 'react';

const AttendanceTracking = () => {
  // State hooks to manage the checkbox states
  const [attendanceTracking, setAttendanceTracking] = useState(true);
  const [recentCheckins, setRecentCheckins] = useState(true);
  const [fingerprintScan, setFingerprintScan] = useState(true);
  const [checkOutDuration, setCheckOutDuration] = useState(true);
  const [frontDeskLogout, setFrontDeskLogout] = useState(false);
  const [unscheduledSessions, setUnscheduledSessions] = useState(false);
  const [editCheckinCode, setEditCheckinCode] = useState(false);
  const [activeMembership, setActiveMembership] = useState(true);
  const [onlineCheckin, setOnlineCheckin] = useState(true);
  const [beforeSessionCheckin, setBeforeSessionCheckin] = useState(true);
  const [showWaiver, setShowWaiver] = useState(true);
  const [importAttendance, setImportAttendance] = useState(false);

  return (
    <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-2xl mx-auto">
      <h2 className="text-xl font-semibold mb-4">Attendance Tracking</h2>
      <div className="space-y-4">
        {/* Toggle for "Enable Attendance Tracking" */}
        <div className="flex justify-between items-center">
          <span>Enable Attendance Tracking</span>
          <div className="flex items-center">
            <span className="mr-2">No</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={attendanceTracking}
                onChange={() => setAttendanceTracking(!attendanceTracking)}
              />
              <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-blue-600"></div>
              <span className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform peer-checked:translate-x-full"></span>
            </label>
            <span className="ml-2">Yes</span>
          </div>
        </div>

        {/* Show Recent Check-ins */}
        <div className="flex justify-between items-center">
          <span>Show recent check-ins</span>
          <div className="flex items-center">
            <span className="mr-2">No</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={recentCheckins}
                onChange={() => setRecentCheckins(!recentCheckins)}
              />
              <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-blue-600"></div>
              <span className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform peer-checked:translate-x-full"></span>
            </label>
            <span className="ml-2">Yes</span>
          </div>
        </div>

        {/* Allow check-in with fingerprint scan */}
        <div className="flex justify-between items-center">
          <span>Allow check-in with finger print scan</span>
          <div className="flex items-center">
            <span className="mr-2">No</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={fingerprintScan}
                onChange={() => setFingerprintScan(!fingerprintScan)}
              />
              <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-blue-600"></div>
              <span className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform peer-checked:translate-x-full"></span>
            </label>
            <span className="ml-2">Yes</span>
          </div>
        </div>

        {/* Allow members to check-out for exact visit duration tracking */}
        <div className="flex justify-between items-center">
          <span>Allow members to check-out for exact visit duration tracking</span>
          <div className="flex items-center">
            <span className="mr-2">No</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={checkOutDuration}
                onChange={() => setCheckOutDuration(!checkOutDuration)}
              />
              <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-blue-600"></div>
              <span className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform peer-checked:translate-x-full"></span>
            </label>
            <span className="ml-2">Yes</span>
          </div>
        </div>

        {/* Allow log-out from front-desk mode */}
        <div className="flex justify-between items-center">
          <span>Allow to log-out from front-desk mode</span>
          <div className="flex items-center">
            <span className="mr-2">No</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={frontDeskLogout}
                onChange={() => setFrontDeskLogout(!frontDeskLogout)}
              />
              <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-blue-600"></div>
              <span className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform peer-checked:translate-x-full"></span>
            </label>
            <span className="ml-2">Yes</span>
          </div>
        </div>

        {/* Allow managers to add unscheduled sessions */}
        <div className="flex justify-between items-center">
          <span>Allow managers to add unscheduled sessions</span>
          <div className="flex items-center">
            <span className="mr-2">No</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={unscheduledSessions}
                onChange={() => setUnscheduledSessions(!unscheduledSessions)}
              />
              <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-blue-600"></div>
              <span className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform peer-checked:translate-x-full"></span>
            </label>
            <span className="ml-2">Yes</span>
          </div>
        </div>

        {/* Allow members to edit their check-in code */}
        <div className="flex justify-between items-center">
          <span>Allow members to edit their check-in code</span>
          <div className="flex items-center">
            <span className="mr-2">No</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={editCheckinCode}
                onChange={() => setEditCheckinCode(!editCheckinCode)}
              />
              <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-blue-600"></div>
              <span className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform peer-checked:translate-x-full"></span>
            </label>
            <span className="ml-2">Yes</span>
          </div>
        </div>

        {/* Require Active Membership */}
        <div className="flex justify-between items-center">
          <span>Require Active Membership</span>
          <div className="flex items-center">
            <span className="mr-2">No</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={activeMembership}
                onChange={() => setActiveMembership(!activeMembership)}
              />
              <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-blue-600"></div>
              <span className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform peer-checked:translate-x-full"></span>
            </label>
            <span className="ml-2">Yes</span>
          </div>
        </div>

        {/* Allow members to check-in through online account */}
        <div className="flex justify-between items-center">
          <span>Allow members to check-in through online account</span>
          <div className="flex items-center">
            <span className="mr-2">No</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={onlineCheckin}
                onChange={() => setOnlineCheckin(!onlineCheckin)}
              />
              <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-blue-600"></div>
              <span className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform peer-checked:translate-x-full"></span>
            </label>
            <span className="ml-2">Yes</span>
          </div>
        </div>

        {/* Members can only check-in before session starts */}
        <div className="flex justify-between items-center">
          <span>Members can only check-in before session starts</span>
          <div className="flex items-center">
            <span className="mr-2">No</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={beforeSessionCheckin}
                onChange={() => setBeforeSessionCheckin(!beforeSessionCheckin)}
              />
              <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-blue-600"></div>
              <span className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform peer-checked:translate-x-full"></span>
            </label>
            <span className="ml-2">Yes</span>
          </div>
        </div>

        {/* Show check-in waiver */}
        <div className="flex justify-between items-center">
          <span>Show check-in waiver</span>
          <div className="flex items-center">
            <span className="mr-2">No</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={showWaiver}
                onChange={() => setShowWaiver(!showWaiver)}
              />
              <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-blue-600"></div>
              <span className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform peer-checked:translate-x-full"></span>
            </label>
            <span className="ml-2">Yes</span>
          </div>
        </div>

        {/* Import attendance */}
        <div className="flex justify-between items-center">
          <span>Import attendance</span>
          <div className="flex items-center">
            <span className="mr-2">No</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={importAttendance}
                onChange={() => setImportAttendance(!importAttendance)}
              />
              <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-blue-600"></div>
              <span className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform peer-checked:translate-x-full"></span>
            </label>
            <span className="ml-2">Yes</span>
          </div>
        </div>

        {/* Save button */}
        <div className="mt-6 flex justify-center">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-full">Save Settings</button>
        </div>
      </div>
    </div>
  );
};

export default AttendanceTracking;

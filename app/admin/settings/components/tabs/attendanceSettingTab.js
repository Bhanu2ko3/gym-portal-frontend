import React, { useState } from "react";
import Button from "../../../components/Button";

const settings = [
  {
    name: "Enable Attendance Tracking",
    key: "attendanceTracking",
    default: true,
  },
  { name: "Show recent check-ins", key: "recentCheckins", default: true },
  {
    name: "Allow check-in with fingerprint scan",
    key: "fingerprintScan",
    default: true,
  },
  {
    name: "Allow members to check-out for exact visit duration tracking",
    key: "checkOutDuration",
    default: true,
  },
  {
    name: "Allow to log-out from front-desk mode",
    key: "frontDeskLogout",
    default: false,
  },
  {
    name: "Allow managers to add unscheduled sessions",
    key: "unscheduledSessions",
    default: false,
  },
  {
    name: "Allow members to edit their check-in code",
    key: "editCheckinCode",
    default: false,
  },
  { name: "Require Active Membership", key: "activeMembership", default: true },
  {
    name: "Allow members to check-in through online account",
    key: "onlineCheckin",
    default: true,
  },
  {
    name: "Members can only check-in before session starts",
    key: "beforeSessionCheckin",
    default: true,
  },
  { name: "Show check-in waiver", key: "showWaiver", default: true },
  { name: "Import attendance", key: "importAttendance", default: false },
];

const AttendanceTracking = () => {
  const [state, setState] = useState(
    settings.reduce(
      (acc, setting) => ({ ...acc, [setting.key]: setting.default }),
      {}
    )
  );

  const toggleSetting = (key) =>
    setState((prev) => ({ ...prev, [key]: !prev[key] }));

  return (
    <div className="bg-white shadow-md rounded-lg p-6 w-full mx-auto">
      <h2 className="text-xl font-medium mb-4 border-b-3 pb-2 border-gray-100">
        Attendance Tracking
      </h2>
      <div className="space-y-4 ml-10">
        {settings.map(({ name, key }) => (
          <div key={key} className="flex justify-between items-center">
            <span>{name}</span>
            <div className="flex items-center mr-10">
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={settings[key]}
                  onChange={() => toggleSetting(key)}
                />
                <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-[var(--primary-color)]"></div>
                <span className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform peer-checked:translate-x-full"></span>
              </label>
            </div>
          </div>
        ))}
        <div className="mt-10 flex justify-center">
          <Button
            text="Save Settings"
            onClick={() => console.log("Clicked!")}
          />
        </div>
      </div>
    </div>
  );
};

export default AttendanceTracking;

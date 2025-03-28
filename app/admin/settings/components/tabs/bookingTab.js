import React, { useState } from 'react';

const bookingsSettings = [
  { label: "Apply membership access restrictions to bookings", id: "membership_access", value: true },
  { label: "Require Email Address", id: "require_email", value: true },
  { label: "Require Phone number", id: "require_phone", value: true },
  { label: "Disable member bookings for overdue payments", id: "disable_overdue", value: true },
  { label: "Require card-on-file for member bookings", id: "require_card_file", value: false },
  { label: "Allow members to cancel bookings", id: "allow_cancel", value: false },
  { label: "Allow bookings after session start time", id: "allow_after_start", value: false },
  { label: "Refund bookings fees on cancellation", id: "refund_on_cancellation", value: true },
  { label: "Members can see who already booked", id: "see_booked_members", value: true },
  { label: "Show number of bookings on public schedule sessions", id: "show_public_bookings", value: true },
  { label: "Enable waitlist for fully booked sessions", id: "enable_waitlist", value: true },
  { label: "Automatically check-in bookings when class starts", id: "auto_checkin", value: false },
  { label: "Allow recurring bookings", id: "allow_recurring", value: false },
  { label: "Collect lead details first", id: "collect_lead_details", value: false },
  { label: "Require document signature", id: "require_doc_signature", value: true },
  { label: "Deduct a session on booking no-show", id: "deduct_no_show", value: true },
  { label: "Send a booking confirmation Email", id: "send_confirmation_email", value: true },
  { label: "Receive copy of cancellation Emails", id: "receive_cancellation_emails", value: true },
  { label: "Require terms acceptance when booking", id: "require_terms_acceptance", value: false },
];

const BookingsSettings = () => {
  const [settings, setSettings] = useState(bookingsSettings);

  const handleToggle = (id) => {
    setSettings((prevSettings) =>
      prevSettings.map((setting) =>
        setting.id === id ? {...setting, value: !setting.value} : setting
      )
    );
  };

  const handleSave = () => {
    // Save settings logic (e.g., API call)
    console.log('Settings saved:', settings);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow">
      <h2 className="text-2xl font-semibold mb-6">Bookings Settings</h2>
      <div className="space-y-4">
        {settings.map((setting) => (
          <div key={setting.id} className="flex items-center justify-between">
            <span>{setting.label}</span>
            <div className="relative inline-block w-10 mr-2 align-middle select-none">
              <input
                type="checkbox"
                name={setting.id}
                id={setting.id}
                checked={setting.value}
                onChange={() => handleToggle(setting.id)}
                className="absolute block w-6 h-6 rounded-full bg-gray-300 cursor-pointer"
              />
              <label
                htmlFor={setting.id}
                className={`block h-6 rounded-full transition-colors duration-200 ${
                  setting.value ? "bg-blue-600" : "bg-gray-400"
                }`}
              ></label>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={handleSave}
        className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Save Settings
      </button>
    </div>
  );
};

export default BookingsSettings;
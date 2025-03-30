import React, { useState } from "react";
import Button from "../../../components/Button";

const bookingsSettings = [
  { label: "Apply membership access restrictions to bookings", id: "membership_access", default: true },
  { label: "Require Email Address", id: "require_email", default: true },
  { label: "Require Phone number", id: "require_phone", default: true },
  { label: "Disable member bookings for overdue payments", id: "disable_overdue", default: true },
  { label: "Require card-on-file for member bookings", id: "require_card_file", default: false },
  { label: "Allow members to cancel bookings", id: "allow_cancel", default: false },
  { label: "Allow bookings after session start time", id: "allow_after_start", default: false },
  { label: "Refund bookings fees on cancellation", id: "refund_on_cancellation", default: true },
  { label: "Members can see who already booked", id: "see_booked_members", default: true },
  { label: "Show number of bookings on public schedule sessions", id: "show_public_bookings", default: true },
  { label: "Enable waitlist for fully booked sessions", id: "enable_waitlist", default: true },
  { label: "Automatically check-in bookings when class starts", id: "auto_checkin", default: false },
  { label: "Allow recurring bookings", id: "allow_recurring", default: false },
  { label: "Collect lead details first", id: "collect_lead_details", default: false },
  { label: "Require document signature", id: "require_doc_signature", default: true },
  { label: "Deduct a session on booking no-show", id: "deduct_no_show", default: true },
  { label: "Send a booking confirmation Email", id: "send_confirmation_email", default: true },
  { label: "Receive copy of cancellation Emails", id: "receive_cancellation_emails", default: true },
  { label: "Require terms acceptance when booking", id: "require_terms_acceptance", default: false },
];

const BookingsSettings = () => {
  const [settings, setSettings] = useState(
    bookingsSettings.reduce((acc, setting) => ({ ...acc, [setting.id]: setting.default }), {})
  );

  const toggleSetting = (id) =>
    setSettings((prev) => ({ ...prev, [id]: !prev[id] }));

  return (
    <div className="bg-white shadow-md rounded-lg p-6 w-full mx-auto">
      <h2 className="text-xl font-medium mb-4 border-b-3 pb-2 border-gray-100">
        Bookings Settings
      </h2>
      <div className="space-y-4 ml-10">
        {bookingsSettings.map(({ label, id }) => (
          <div key={id} className="flex justify-between items-center">
            <span>{label}</span>
            <div className="flex items-center mr-10">
              
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={settings[id]}
                  onChange={() => toggleSetting(id)}
                />
                <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-[var(--primary-color)]"></div>
                <span className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform peer-checked:translate-x-full"></span>
              </label>
              
            </div>
          </div>
        ))}
        <div className="mt-10 flex justify-center">
          <Button text="Save Settings" onClick={() => console.log("Settings saved!", settings)} />
        </div>
      </div>
    </div>
  );
};

export default BookingsSettings;

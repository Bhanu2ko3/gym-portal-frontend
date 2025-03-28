"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ChevronDown,
  ChevronUp,
  LayoutDashboard,
  Users,
  CreditCard,
  Mail,
  DollarSign,
  Dumbbell,
  Settings,
  Monitor,
} from "lucide-react";
import { FaEllipsisV } from "react-icons/fa";

const Sidebar = ({ onItemClick }) => {
  const [expandedItems, setExpandedItems] = useState({
    members: true,
    billing: false,
    marketing: false,
    sales: false,
    gym: false,
    settings: false,
    frontDesk: false,
  });

  const [selectedItem, setSelectedItem] = useState("Dashboard"); // Track the selected item

  const toggleExpand = (item) => {
    setExpandedItems({
      ...expandedItems,
      [item]: !expandedItems[item],
    });
  };

  const menuItems = [
    {
      name: "Dashboard",
      link: "/admin/dashboard",
      icon: <LayoutDashboard size={20} />,
      expandable: true,
    },
    {
      name: "Members",
      link: "/admin/members",
      icon: <Users size={20} />,
      expandable: true,
    },
    {
      name: "Billing",
      link: "/admin/billing",
      icon: <CreditCard size={20} />,
      expandable: true,
    },
    {
      name: "Marketing",
      link: "/admin/marketing",
      icon: <Mail size={20} />,
      expandable: true,
    },
    {
      name: "Sales",
      link: "/admin/sales",
      icon: <DollarSign size={20} />,
      expandable: true,
    },
    {
      name: "Gym",
      link: "/admin/gym",
      icon: <Dumbbell size={20} />,
      expandable: true,
    },
    {
      name: "Settings",
      link: "/admin/settings",
      icon: <Settings size={20} />,
      expandable: true,
    },
    {
      name: "Front Desk",
      link: "/admin/frontDesk",
      icon: <Monitor size={20} />,
      expandable: true,
    },
  ];

  return (
    <div className="h-screen bg-white w-64 flex flex-col shadow-md">
      {/* Logo Section */}
      <div className="p-4 flex items-center justify-center ">
        <div className="relative h-20 w-full">
          <Image
            src="/logo.svg"
            alt="Physio Logo"
            layout="fill"
            objectFit="contain"
            className="cursor-pointer"
          />
        </div>
      </div>
      {/* Menu Items */}
      <div className="flex-grow overflow-y-auto">
        <ul className="py-2 space-y-1">
          {menuItems.map((item) => (
            <li key={item.name} className="px-3">
              <div
                className={`flex items-center justify-between cursor-pointer p-2 rounded-lg transition-all duration-200 ease-in-out
                  ${
                    item.name === selectedItem
                      ? "bg-blue-200 text-[var(--primary-color)] font-medium shadow-md" // Enhanced selected styling
                      : "text-gray-700 hover:bg-blue-50"
                  }`}
                onClick={() => {
                  if (item.expandable) {
                    toggleExpand(item.name);
                  }
                  setSelectedItem(item.name);
                  if (onItemClick) onItemClick(item.name);
                }}
              >
                <Link href={item.link} className="flex items-center w-full">
                  <span
                    className={`mr-3 ${
                      item.name === selectedItem
                        ? "text-[var(--primary-color)]"
                        : "text-black"
                    }`}
                  >
                    {item.icon}
                  </span>
                  <span>{item.name}</span>
                </Link>
                {item.expandable && (
                  <span>
                    {expandedItems[item.name] ? (
                      <ChevronUp
                        size={16}
                        className={
                          item.name === selectedItem ? "text-white" : ""
                        }
                      />
                    ) : (
                      <ChevronDown
                        size={16}
                        className={
                          item.name === selectedItem ? "text-white" : ""
                        }
                      />
                    )}
                  </span>
                )}
              </div>

              {/* Submenu with enhanced styling */}
            </li>
          ))}
        </ul>
      </div>
      
      {/* Profile Section Sticks to Bottom of Page */}
      <div className="p-4 relative text-white">
        <div className="flex items-center justify-between bg-[var(--primary-color)] p-3 rounded-lg">
          {/* Profile Info */}
          <div className="flex items-center">
            <img
              alt="User Avatar"
              className="rounded-full mr-3 w-10 h-10"
              src="https://placehold.co/40x40"
            />
            <div>
              <p className="text-sm font-semibold">John Doe</p>
              <p className="text-xs">@johndoe</p>
            </div>
          </div>

          {/* Vertical 3-dot Menu Button */}
          <button className="hover:text-gray-500">
            <FaEllipsisV size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

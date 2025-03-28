// Button.jsx
import React from "react";

const Button = ({ label, onClick, className }) => {
  return (
    <button
      className={`bg-[var(--primary-color)] text-white py-2 px-4 rounded-full ${className}`}
      onClick={onClick}
    >
      {label} <i className="fas fa-arrow-right"></i>
    </button>
  );
};

export default Button;

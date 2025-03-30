const Button = ({ text, onClick, className, icon }) => {
  return (
    <button
      className={`bg-[var(--primary-color)] text-white py-2 px-10 hover:bg-[var(--secondary-color)] rounded-full w-auto transition duration-300 flex items-center justify-center gap-2 cursor-pointer text-center ${className}`}
      onClick={onClick}
    >
      {text}
      {icon && <i className={icon}></i>}
    </button>
  );
};

export default Button;

// className="bg-white border border-gray-300 text-gray-700 rounded-full px-4 py-2 shadow-sm hover:bg-gray-100 transition duration-300"
// <Button text="Add Session" onClick={() => console.log("Clicked!")} />
// import Button from "../../../components/Button";
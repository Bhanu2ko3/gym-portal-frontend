const Button = ({ text, onClick, className, icon }) => {
  return (
    <button
      className={`bg-[var(--primary-color)] text-white py-2 px-10 hover:bg-[var(--secondary-color)] rounded-full w-auto transition duration-300 flex items-center justify-center gap-2 text-center ${className}`}
      onClick={onClick}
    >
      {text}
      {icon && <i className={icon}></i>}
    </button>
  );
};

export default Button;


// <Button text="Add Session" onClick={() => console.log("Clicked!")} />
// import Button from "../../../components/Button";
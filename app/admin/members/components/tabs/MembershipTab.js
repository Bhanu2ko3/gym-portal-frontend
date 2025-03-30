import Button from "../../../components/Button";
import Lable from "../../../components/Lable";

export default function Widget() {
  return (
    <div className=" bg-white rounded-lg shadow-md h-100 ">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-4 bg-[var(--quinary-color)] py-4 pl-4 rounded-t-lg">
        <h2 className="text-lg ml-3 font-semibold text-[var(--primary-color)]">
          Membership Options
        </h2>
        <div className="ml-auto">
          <Lable label="All Payments" />
        </div>
      </div>

      {/* Empty State Section */}
      <div className="flex flex-col items-center justify-center h-48">
        <p className="text-gray-500">
          No membership options have been added yet.
        </p>
      </div>

      <div className="mt-6 flex justify-center ">
        <Button
          text="New Membership Option"
          onClick={() => console.log("Clicked!")}
        />
      </div>
    </div>
  );
}

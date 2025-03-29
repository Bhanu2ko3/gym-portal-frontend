import Button from "../../../components/Button";

export default function Widget() {
  return (
    <div className=" bg-white rounded-lg shadow-md h-100 mt-4">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-4 bg-[var(--quinary-color)] p-4 rounded-t-lg">
        <h2 className="text-lg font-semibold text-[var(--primary-color)]">Membership Options</h2>
        <Button text="Add Membership Option" onClick={() => console.log("Clicked!")} />
      </div>

      {/* Empty State Section */}
      <div className="flex flex-col items-center justify-center h-48">
        <p className="text-gray-500">No membership options have been added yet.</p>
      </div>

      {/* New Membership Option Button */}
      <div className="mt-6 flex justify-center py-4">
      <Button text="New Membership Option" onClick={() => console.log("Clicked!")} />
      </div>
    </div>
  );
}

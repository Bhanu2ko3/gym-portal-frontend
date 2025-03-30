import Button from "../../../components/Button";

export default function Widget() {
  return (
    <div className=" bg-white rounded-lg shadow-md h-150">
      {/* Header Section */}
      <div className="flex justify-between items-center bg-[var(--quinary-color)] p-4 rounded-t-lg">
        <h2 className="text-lg ml-3 font-semibold text-[var(--primary-color)]">
          Rosters
        </h2>
        <Button text="Add Rosters" onClick={() => console.log("Clicked!")} />
      </div>

      {/* Empty State Section */}
      <div className="flex flex-col items-center justify-center mt-70">
        <p className="text-gray-500">
          Group members into rosters and assign it to specific sessions on the
          schedule.
        </p>
        <br />
        <p className="text-gray-500">No rosters have been added yet.</p>
      </div>

      <div className=" flex justify-center mt-20">
        <Button text="Create Rosters" onClick={() => console.log("Clicked!")} />
      </div>
    </div>
  );
}

import MembersTab from "../MembersTab";

export default function MembersTab2() {

  const members = [
    {
      id: "1571",
      name: "Demo Customer",
      contact: "+77777777777",
      email: "Test@Gmail.Com",
      age: "26",
      gender: "Male",
      residence: "Salama Park",
    },
    {
      id: "1571",
      name: "Cosam Malaika",
      contact: "+111111111111111",
      email: "Test@Gmail.Com",
      age: "26",
      gender: "Male",
      residence: "Salama Park",
    },
    {
      id: "1571",
      name: "Cosam Malaika",
      contact: "+111111111111111",
      email: "Test@Gmail.Com",
      age: "26",
      gender: "Male",
      residence: "Salama Park",
    },
  ];

  return (
    <div className="bg-[var(--tertiary-color)]">
      <MembersTab />
    </div>
  );
}

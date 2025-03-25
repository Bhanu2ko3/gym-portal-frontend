// pages/admin/members.js
import Sidebar from './components/Sidebar';
import MembersTable from './components/MembersTable';

export default function MembersPage() {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 overflow-auto">
        <MembersTable />
      </div>
    </div>
  );
}
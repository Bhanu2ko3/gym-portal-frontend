import FrontdeskTabBar from './components/frontdeskTabBar';

export default function FrontdeskPage() {
  return (
    
    <div className="bg-[var(--tertiary-color)]">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <button className="text-blue-600">Log Out</button>
      </div>
      <FrontdeskTabBar/>
    </div>
    
  );
}
import Sidebar from "../components/dashboard/SidebarNav";
import ExecutionSummary from "../components/dashboard/ExecutionSummary";
import RiskIndicators from "../components/dashboard/RiskIndicators";
import PerformanceOverview from "../components/dashboard/PerformanceOverview";

export default function HealthSummary() {
  return (
    <div className="flex min-h-screen bg-white font-sans">
      <Sidebar />

      <main className="flex-1 p-8">
        <h1 className="text-2xl font-semibold text-gray-800 mb-6">Health Summary</h1>

        <div className="flex justify-between gap-40 mb-8">
          <ExecutionSummary/>
          <RiskIndicators/>
        </div>

         <div className="flex justify-between gap-40 mb-8">
        <PerformanceOverview/>
        </div>

      </main>
    </div>
  );
}
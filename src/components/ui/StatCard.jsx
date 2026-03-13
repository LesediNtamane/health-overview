export default function StatCard({ value, label, className = "" }) {
  return (
    <div className={`bg-[#F5F5F5] rounded-lg p-3 text-center border border-[#33333] flex-1 ${className}`}>
      <p className="text-lg font-bold text-gray-800">{value}</p>
      <p className="text-xs text-gray-600 mt-0.5">{label}</p>
    </div>
  );
}   
export default function MetricRow({ value, label, className = "" }) {
  return (
    <div className={`flex items-baseline gap-10 ${className}`}>
      <span className="text-3xl font-semibold text-gray-800">{value}</span>
      <span className="text-gray-400 text-lg">-</span>
      <span className="text-sm text-gray-600">{label}</span>
    </div>
  );
}
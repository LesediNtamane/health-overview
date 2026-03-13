export default function ProgressBar({ label, value, max = 100, className = "" }) {
  const percent = Math.min(100, Math.round((value / max) * 100));
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {label && <span className="text-xs text-gray-600 w-20 shrink-0">{label}</span>}
      <div className="flex-1 bg-gray-300 rounded-full h-2 overflow-hidden">
        <div
          className="bg-purple-500 h-2 rounded-full transition-all duration-500"
          style={{ width: `${percent}%` }}
        />
      </div>
      <span className="text-xs text-gray-700 w-8 text-right">{percent}%</span>
    </div>
  );
}
export default function Card({ title, children, className = "" }) {
  return (
    <div className={`bg-[#F5F5F5] border border-indigo-300 rounded-xl p-10 ${className}`}>
      {title && <h2 className="font-semibold mb-10 text-lg text-gray-800 mb-4">{title}</h2>}
      {children}
    </div>
  );
}
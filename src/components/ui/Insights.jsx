export default function Insights({label, className=""}) {
  return (
    <div className="flex flex-col">
      <ol className="list-decimal">
        <li>{label}</li>
      </ol>
    </div>
  )
}

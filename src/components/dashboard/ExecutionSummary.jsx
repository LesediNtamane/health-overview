import React from "react";
import Card  from "../ui/Card";
import ProgessBar from "../ui/ProgressBar";
import StatCard from "../ui/StatCard";

const STATS = [
    { value: 3, label: "Passed"},
    {value: 430, label:"Failed"},
    {value: 240, label:"Blocked"}
]

const RATES = [
    {label: "Execution Rate", value: 100},
    {label:"Pass Rate",value:84},
    {label:"Failure Rate",value:10}
]


export default function ExecutionSummary() {
    
  return (
    <Card title="Execution Summary" className="w-110 h-100">
      <div className="flex flex-row mb-10 gap-10">
        <span className="underline font-semibold">1084</span>
        <span className="font-semibold">Total test cases</span>
      </div>
      <div className="flex flex-row gap-5">
        {STATS.map((item,index)=>(
        <StatCard
        key={index}
        value={item.value}
        label={item.label}
        />
        ))}
        </div>

        <div className="mt-5">
        
        {RATES.map((item,index) => (
            <ProgessBar 
            key={index}
            value={item.value}
            label={item.label}
            />
        ))}
        </div>
      
    </Card>
  )
}

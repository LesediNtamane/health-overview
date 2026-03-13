import React from 'react';
import Card from "../ui/Card";
import ProgressBar from '../ui/ProgressBar';
import MetricRow from '../ui/MetricRow';

const METRICS=[
    {value: 3, label: "High"},
    {value: 7, label: "Medium"},
    {value: 12, label: "Critical"},
    {value: 4, label: "Reopened"},

]
const DEFECTS=[
    {value: 12, label: "Critical"},
    {value: 4, label: "Reopened"},
]
const RATES = [
    {label: "AI Risk Score", value: 100},
]

export default function RiskIndicators() {
  return (
    <Card title="Risk Indicators" className="w-110">
      <span className="font-semibold mb-10">Risk Modules</span>
      <div className='flex flex-col'>
        {METRICS.map((item,index)=>(
            <MetricRow
            key={index}
            value={item.value}
            label={item.label}
            />
        ))}
        </div>

        <div className="mt-10"><span className="font-semibold mt-5">Defects</span>
        {DEFECTS.map((item,index)=>(
            <MetricRow
            key={index}
            value={item.value}
            label={item.label}
            />
        ))}
        </div>

        <div className="mt-5">
                
                {RATES.map((item,index) => (
                    <ProgressBar 
                    key={index}
                    value={item.value}
                    label={item.label}
                    />
                ))}
                </div>
    </Card>
  )
}

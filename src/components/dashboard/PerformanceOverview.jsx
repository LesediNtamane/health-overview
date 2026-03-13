import React from 'react';
import Card from '../ui/Card';

export default function PerformanceOverview() {
  return (
    <Card title="Performance Overview" className="w-90">
      <div className=''>
        <span className="font-semibold font">Avg Time</span>
        <span className="font-semibold font text-purple">3h 1min</span>
      </div>
      <div class="grid grid-cols-2 gap-10 divide-x-1">
            <div>Slowest Test Suite</div>
            <div>Fastest Test Suite</div>
            </div>
    </Card>
  )
}

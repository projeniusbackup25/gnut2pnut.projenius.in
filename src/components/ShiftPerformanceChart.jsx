import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './ShiftPerformanceChart.css';
import { FiClock } from 'react-icons/fi';

// The component now receives 'data' as a prop
const ShiftPerformanceChart = ({ data }) => {
  return (
    <div className="shift-performance-card">
      <div className="card-header">
        <FiClock className="card-icon" />
        <div className="card-title-group">
          <h3 className="card-title">Shift Performance</h3>
          <p className="card-subtitle">Efficiency and output by working shifts</p>
        </div>
      </div>
      <div className="chart-container">
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <XAxis dataKey="shift" axisLine={false} tickLine={false} />
            <YAxis axisLine={false} tickLine={false} domain={[1500, 2500]} />
            <Tooltip />
            <Legend wrapperStyle={{ paddingTop: '10px' }} />
            <Line type="monotone" dataKey="efficiency" stroke="#4169E1" strokeWidth={3} dot={{ r: 6 }} activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="performance" stroke="#3CB371" strokeWidth={3} dot={{ r: 6 }} activeDot={{ r: 8 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ShiftPerformanceChart;
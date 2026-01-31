import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './DailyProductionFlowChart.css';
import { FiBarChart2 } from 'react-icons/fi';

// The component now receives 'data' as a prop
const DailyProductionFlowChart = ({ data }) => {
  return (
    <div className="daily-production-flow-card">
      <div className="card-header">
        <FiBarChart2 className="card-icon" />
        <div className="card-title-group">
          <h3 className="card-title">Daily Production Flow</h3>
          <p className="card-subtitle">Input, Output, and Wastage throughout the day</p>
        </div>
      </div>
      <div className="chart-container">
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <XAxis dataKey="time" axisLine={false} tickLine={false} />
            <YAxis axisLine={false} tickLine={false} domain={[0, 600]} />
            <Tooltip cursor={{ fill: 'transparent' }} />
            <Legend wrapperStyle={{ paddingTop: '10px' }} />
            <Bar dataKey="Input" fill="#32CD32" barSize={20} />
            <Bar dataKey="Output" fill="#1E90FF" barSize={20} />
            <Bar dataKey="Wastage" fill="#FF6347" barSize={20} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default DailyProductionFlowChart;
import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import './GradeDistributionChart.css';
import { FiPieChart } from 'react-icons/fi';

// The component now receives 'data' as a prop
const GradeDistributionChart = ({ data }) => {
  return (
    <div className="grade-distribution-card">
      <div className="card-header">
        <FiPieChart className="card-icon" />
        <div className="card-title-group">
          <h3 className="card-title">Grade Distribution</h3>
          <p className="card-subtitle">Current batch composition</p>
        </div>
      </div>
      <div className="chart-and-legend-container">
        <ResponsiveContainer width="50%" height={200}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={90}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div className="custom-legend">
          {data.map((entry, index) => (
            <div key={`legend-${index}`} className="legend-item">
              <span className="legend-color-box" style={{ backgroundColor: entry.color }}></span>
              <span className="legend-text">{entry.name}</span>
              <span className="legend-percentage">{entry.value}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GradeDistributionChart;
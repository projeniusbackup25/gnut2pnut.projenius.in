import React, { useState, useEffect } from 'react';
import './Dashboard.css';

// Import all components
import KpiCard from '../components/KpiCard';
import DailyProductionFlowChart from '../components/DailyProductionFlowChart';
import ShiftPerformanceChart from '../components/ShiftPerformanceChart';
import RealtimeGradingAnalysis from '../components/RealtimeGradingAnalysis';
import GradeDistributionChart from '../components/GradeDistributionChart';
import MarketRatesCard from '../components/MarketRatesCard';

// Import icons
import { FiBox, FiBriefcase, FiAlertTriangle, FiClock } from 'react-icons/fi';

// Helper function to generate a random number within a range
const getRandom = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// Initial state creator
const generateInitialData = () => ({
  kpi: {
    input: 2120,
    output: 1800,
    wastage: 320,
    predictedOil: 850,
  },
  dailyProduction: [
    { time: '06:00', Input: 450, Output: 380, Wastage: 80 },
    { time: '10:00', Input: 520, Output: 450, Wastage: 90 },
    { time: '14:00', Input: 480, Output: 400, Wastage: 75 },
    { time: '18:00', Input: 380, Output: 320, Wastage: 60 },
    { time: '22:00', Input: 290, Output: 230, Wastage: 45 },
  ],
  shiftPerformance: [
    { shift: 'Morning', efficiency: 2300, performance: 2150 },
    { shift: 'Evening', efficiency: 1900, performance: 1850 },
    { shift: 'Night', efficiency: 1700, performance: 1680 },
  ],
  gradingAnalysis: {
    grades: [
      { label: 'Grade A', percentage: 45, weight: 810, color: 'green' },
      { label: 'Grade B', percentage: 35, weight: 630, color: 'orange' },
      { label: 'Grade C', percentage: 20, weight: 360, color: 'red' },
    ],
    batchStatus: {
      intake: 485,
      time: '2h 15m',
      currentWeight: 412,
      completion: 85,
    },
  },
  marketRates: [
    { variety: 'Bold Variety - Grade A', price: 85, change: 2 },
    { variety: 'Java Variety - Grade A', price: 78, change: 1 },
    { variety: 'Spanish Variety - Grade A', price: 82, change: 0 },
  ],
});

const DashboardPage = () => {
  const [dashboardData, setDashboardData] = useState(generateInitialData());

  useEffect(() => {
    const interval = setInterval(() => {
      // This function updates the state with new random data
      setDashboardData(prevData => {
        const newInput = prevData.kpi.input + getRandom(-20, 20);
        return {
          kpi: {
            input: newInput,
            output: Math.floor(newInput * 0.85) + getRandom(-15, 15),
            wastage: Math.floor(newInput * 0.15) + getRandom(-5, 5),
            predictedOil: Math.floor(newInput * 0.4) + getRandom(-10, 10),
          },
          dailyProduction: prevData.dailyProduction.map(d => ({
            ...d,
            Input: d.Input + getRandom(-10, 10),
            Output: d.Output + getRandom(-10, 10),
            Wastage: d.Wastage + getRandom(-5, 5),
          })),
          shiftPerformance: prevData.shiftPerformance.map(s => ({
            ...s,
            efficiency: s.efficiency + getRandom(-50, 50),
            performance: s.performance + getRandom(-50, 50),
          })),
          gradingAnalysis: {
            ...prevData.gradingAnalysis,
            batchStatus: {
              ...prevData.gradingAnalysis.batchStatus,
              currentWeight: prevData.gradingAnalysis.batchStatus.currentWeight + getRandom(-2, 2),
              completion: Math.min(100, prevData.gradingAnalysis.batchStatus.completion + 1),
            },
          },
          marketRates: prevData.marketRates.map(r => ({
            ...r,
            price: r.price + getRandom(-1, 1),
          }))
        };
      });
    }, 5000); // Update every 5000 milliseconds (5 seconds)

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []); // The empty dependency array ensures this effect runs only once on mount

  const { kpi, dailyProduction, shiftPerformance, gradingAnalysis, marketRates } = dashboardData;
  const gradeDistributionData = gradingAnalysis.grades.map(g => ({
      name: g.label,
      value: g.percentage,
      color: g.color === 'green' ? '#28a745' : g.color === 'orange' ? '#ffc107' : '#dc3545'
  }));

  return (
    <>
    <div className="dashboard-page">
      <header className="dashboard-header">
        <h1 className="dashboard-title">Production Dashboard</h1>
        <p className="dashboard-subtitle">Real-time monitoring of peanut processing operations</p>
      </header>

      <section className="kpi-cards-grid">
        <KpiCard
          title="Total Input Quantity"
          value={kpi.input.toLocaleString()}
          unit="kg"
          change="+12.5%"
          description="from yesterday"
          icon={FiBox}
          type="input"
        />
        <KpiCard
          title="Total Output"
          value={kpi.output.toLocaleString()}
          unit="kg"
          change="-8.2%"
          description="efficiency"
          icon={FiBriefcase}
          type="output"
        />
        <KpiCard
          title="Total Wastage"
          value={kpi.wastage.toLocaleString()}
          unit="kg"
          change="-3.1%"
          description="improvement"
          icon={FiAlertTriangle}
          type="wastage"
        />
        <KpiCard
          title="Predicted Oil"
          value={kpi.predictedOil.toLocaleString()}
          unit="L"
          change="47.2%"
          description="extraction rate"
          icon={FiClock}
          type="predicted-oil"
        />
      </section>

      <section className="charts-grid">
        <DailyProductionFlowChart data={dailyProduction} />
        <ShiftPerformanceChart data={shiftPerformance} />
      </section>

      <section className="grading-and-distribution-grid">
        <RealtimeGradingAnalysis data={gradingAnalysis} />
        <GradeDistributionChart data={gradeDistributionData} />
      </section>

      <section className="market-rates-section">
        <MarketRatesCard data={marketRates} />
      </section>
    </div>
    </>
  );
};

export default DashboardPage;
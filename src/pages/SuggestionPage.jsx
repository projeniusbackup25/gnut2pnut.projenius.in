import React, { useState, useEffect } from 'react';
import './SuggestionPage.css';

// Import all the new components
import StatCard from '../components/StatCard';
import IssueCard from '../components/IssueCard';
import OptimizationCard from '../components/OptimizationCard';
import AiRecommendationCard from '../components/AiRecommendationCard';
import AnalysisCard from '../components/AnalysisCard';

// Import icons
import { FiAlertTriangle, FiSettings, FiCpu, FiTrendingUp, FiTarget, FiTool } from 'react-icons/fi';

// Helper function for random numbers
const getRandom = (min, max, decimals = 1) => (Math.random() * (max - min) + min).toFixed(decimals);

const SuggestionPage = () => {
  const [activeTab, setActiveTab] = useState('issues');
  const [suggestionData, setSuggestionData] = useState({
    stats: {
      efficiency: 78,
      quality: 92,
      uptime: 87,
      energy: 74,
    },
    issues: [
      { id: 1, currentPerf: 42, optimalPerf: 48 },
      { id: 2, currentPerf: 85, optimalPerf: 75 },
      { id: 3, currentPerf: 920, optimalPerf: 1000 },
    ],
    analysis: {
        average: 76.8,
        peak: 84.2,
        lowest: 68.9,
    }
  });

  useEffect(() => {
      const interval = setInterval(() => {
          setSuggestionData(prev => ({
              stats: {
                  efficiency: parseFloat(getRandom(75, 82)),
                  quality: parseFloat(getRandom(90, 95)),
                  uptime: parseFloat(getRandom(85, 92)),
                  energy: parseFloat(getRandom(72, 78)),
              },
              issues: [
                  { ...prev.issues[0], currentPerf: parseFloat(getRandom(40, 45)) },
                  { ...prev.issues[1], currentPerf: parseFloat(getRandom(82, 88)) },
                  { ...prev.issues[2], currentPerf: parseFloat(getRandom(910, 950)) },
              ],
              analysis: {
                  average: parseFloat(getRandom(75, 78)),
                  peak: parseFloat(getRandom(83, 86)),
                  lowest: parseFloat(getRandom(67, 70)),
              }
          }))
      }, 5000);
      return () => clearInterval(interval);
  }, []);

  const renderTabContent = () => {
    switch (activeTab) {
      case 'issues':
        return (
          <div className="tab-content">
            <IssueCard 
              title="Low Oil Extraction Rate"
              subtitle="High moisture content in raw material"
              priority="high priority"
              currentPerf={`${suggestionData.issues[0].currentPerf}%`}
              optimalPerf={`${suggestionData.issues[0].optimalPerf}%`}
              impact="12% reduction in oil yield"
            />
            <IssueCard 
              title="Machine Temperature Fluctuation"
              subtitle="Cooling system inefficiency"
              priority="medium priority"
              currentPerf={`${suggestionData.issues[1].currentPerf}°C`}
              optimalPerf={`${suggestionData.issues[1].optimalPerf}°C`}
              impact="8% quality degradation"
            />
            <IssueCard 
              title="Processing Speed Variance"
              subtitle="Belt tension adjustment needed"
              priority="low priority"
              currentPerf={`${suggestionData.issues[2].currentPerf} kg/h`}
              optimalPerf={`${suggestionData.issues[2].optimalPerf} kg/h`}
              impact="3% capacity reduction"
            />
          </div>
        );
      case 'tips':
        return (
          // AI RECOMMENDATIONS HAVE BEEN REMOVED FROM HERE
          <div className="tab-content">
             <div className="suggestion-section">
                <h2 className="section-title"><FiAlertTriangle /> Immediate Actions</h2>
                <OptimizationCard title="Reduce Raw Material Moisture" description="Implement pre-drying process to achieve 6-7% moisture content" impact="Expected 8-10% yield improvement" tags={["Medium effort", "2-3 days"]} />
                <OptimizationCard title="Calibrate Temperature Controls" description="Adjust heating elements and check thermostat accuracy" impact="Stabilize quality parameters" tags={["Low effort", "4-6 hours"]} />
            </div>
             <div className="suggestion-section">
                <h2 className="section-title"><FiSettings /> Process Optimization</h2>
                <OptimizationCard title="Optimize Pressing Duration" description="Increase pressing time by 15-20 seconds for better extraction" impact="3-5% additional oil recovery" tags={["Low effort", "Immediate"]} />
                <OptimizationCard title="Implement Multi-stage Filtering" description="Add secondary filtration to improve oil quality" impact="Better oil clarity and grade" tags={["High effort", "1-2 weeks"]} />
            </div>
             <div className="suggestion-section">
                <h2 className="section-title"><FiTool /> Maintenance</h2>
                <OptimizationCard title="Regular Belt Maintenance" description="Weekly tension checks and monthly belt replacements" impact="Consistent processing speed" tags={["Low effort", "Ongoing"]} />
                <OptimizationCard title="Clean Extraction Chamber" description="Deep cleaning every 48 hours to prevent oil contamination" impact="Maintain oil quality standards" tags={["Medium effort", "Every 2 days"]} />
            </div>
          </div>
        );
      case 'analysis':
        return (
          // AI RECOMMENDATIONS HAVE BEEN ADDED HERE
          <div className="tab-content analysis-grid">
            <AnalysisCard title="Efficiency Trend Analysis" subtitle="7-day performance analysis" icon={FiTrendingUp}>
                <div className="trend-item"><span className="trend-label">Average Efficiency</span><span className="trend-value">{suggestionData.analysis.average}%</span></div>
                <div className="trend-item"><span className="trend-label">Peak Performance</span><span className="trend-value positive">{suggestionData.analysis.peak}%</span></div>
                <div className="trend-item"><span className="trend-label">Lowest Performance</span><span className="trend-value negative">{suggestionData.analysis.lowest}%</span></div>
                <p style={{marginTop: '15px', fontSize: '14px', color: '#a1887f'}}>3.2% decline from last week</p>
            </AnalysisCard>

            <AnalysisCard title="Improvement Potential" subtitle="Estimated gains from optimization" icon={FiTarget}>
                <div className="potential-item">
                    <div className="potential-header"><span className="potential-label">Moisture Control</span><span className="potential-gain">+8.5%</span></div>
                    <div className="potential-progress-bar-container"><div className="potential-progress-bar" style={{width: '70%'}}></div></div>
                </div>
                 <div className="potential-item">
                    <div className="potential-header"><span className="potential-label">Temperature Optimization</span><span className="potential-gain">+4.2%</span></div>
                    <div className="potential-progress-bar-container"><div className="potential-progress-bar" style={{width: '45%'}}></div></div>
                </div>
                 <div className="potential-item">
                    <div className="potential-header"><span className="potential-label">Process Timing</span><span className="potential-gain">+2.8%</span></div>
                    <div className="potential-progress-bar-container"><div className="potential-progress-bar" style={{width: '30%'}}></div></div>
                </div>
                <div className="total-gain"><span className="total-gain-label">Total Potential Gain</span><span className="total-gain-value"> +15.5%</span></div>
            </AnalysisCard>
            
            <AnalysisCard title="AI Recommendations" subtitle="Automated suggestions for optimization" icon={FiCpu}>
                {/* We use a different component here for the list items */}
                <div className="ai-analysis-content">
                  <AiRecommendationCard title="Implement predictive maintenance schedule" description="Based on current usage patterns, schedule maintenance every 168 hours to prevent efficiency drops" />
                  <AiRecommendationCard title="Optimize batch sizing" description="Process 450-500kg batches for optimal efficiency based on your equipment capacity" />
                  <AiRecommendationCard title="Monitor ambient conditions" description="Install humidity sensors to automatically adjust processing parameters" />
                </div>
            </AnalysisCard>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="suggestion-page">
      <header className="suggestion-header">
        <h1 className="suggestion-title">Performance Optimization</h1>
        <p className="suggestion-subtitle">AI-powered suggestions to improve oil extraction efficiency and resolve processing issues.</p>
        <div className="alert-banner">
          <FiAlertTriangle /> 3 active issues detected affecting your production efficiency. Review suggestions below for immediate improvements.
        </div>
      </header>

      <section className="stat-cards-grid">
        <StatCard title="Current Efficiency" value={`${suggestionData.stats.efficiency}%`} target="85%" belowTargetText={`${(85 - suggestionData.stats.efficiency).toFixed(1)}% below target`} />
        <StatCard title="Oil Quality Index" value={`${suggestionData.stats.quality}%`} target="95%" belowTargetText={`${(95 - suggestionData.stats.quality).toFixed(1)}% below target`} />
        <StatCard title="Machine Uptime" value={`${suggestionData.stats.uptime}%`} target="90%" belowTargetText={`${(90 - suggestionData.stats.uptime).toFixed(1)}% below target`} />
        <StatCard title="Energy Efficiency" value={`${suggestionData.stats.energy}%`} target="80%" belowTargetText={`${(80 - suggestionData.stats.energy).toFixed(1)}% below target`} />
      </section>

      <nav className="suggestion-tabs">
        <button className={`tab-button ${activeTab === 'issues' ? 'active' : ''}`} onClick={() => setActiveTab('issues')}>Current Issues</button>
        <button className={`tab-button ${activeTab === 'tips' ? 'active' : ''}`} onClick={() => setActiveTab('tips')}>Optimization Tips</button>
        <button className={`tab-button ${activeTab === 'analysis' ? 'active' : ''}`} onClick={() => setActiveTab('analysis')}>Performance Analysis</button>
      </nav>

      <main className="suggestion-content-area">
        {renderTabContent()}
      </main>
    </div>
  );
};

export default SuggestionPage;
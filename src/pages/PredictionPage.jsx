import React, { useState } from 'react';
import './PredictionPage.css';
import PredictionCalculator from '../components/PredictionCalculator';
import PredictionPlaceholder from '../components/PredictionPlaceholder';
import PredictionResult from '../components/PredictionResult';

// Mock data for calculation logic
const varietyData = {
  Java: { base: 46.5 },
  Bold: { base: 50.0 },
  Spanish: { base: 52.5 },
  Runner: { base: 48.0 },
  Valencia: { base: 45.5 },
};

const gradeMultipliers = { A: 1.0, B: 0.92, C: 0.85 };
const pricePerLiter = 180; // Assuming ₹180 per Liter

const PredictionPage = () => {
  const [predictionResult, setPredictionResult] = useState(null);

  const handleCalculate = (formData) => {
    const { quantity, variety, grade, moisture } = formData;
    
    // --- Simple Calculation Logic ---
    const baseOilPercent = varietyData[variety].base;
    const gradeEffect = gradeMultipliers[grade] * 100;
    
    // Moisture effect: optimal is 6-8%. Higher moisture reduces yield.
    const moistureEffect = moisture > 10 ? 100 - (moisture - 10) * 1.5 : 100;
    const moistureMultiplier = moistureEffect / 100;
    
    const finalEfficiencyDecimal = (baseOilPercent / 100) * (gradeEffect / 100) * moistureMultiplier;
    const finalEfficiencyPercent = (finalEfficiencyDecimal * 100).toFixed(1);
    
    const oilOutputKg = quantity * finalEfficiencyDecimal;
    const oilOutputLiters = (oilOutputKg / 0.92).toFixed(1); // Peanut oil density is ~0.92 kg/L
    
    const estimatedValue = Math.round(oilOutputLiters * pricePerLiter);

    setPredictionResult({
      oilOutput: oilOutputLiters,
      efficiency: finalEfficiencyPercent,
      value: estimatedValue,
      breakdown: {
        variety: variety,
        grade: grade,
        base: baseOilPercent,
        gradeEffect: gradeEffect,
        moistureEffect: Math.round(moistureEffect),
      },
    });
  };

  return (
    <div className="prediction-page">
      <header className="prediction-header">
        <h1 className="prediction-title">Oil Extraction Predictions</h1>
        <p className="prediction-subtitle">
          Calculate expected oil yield from different peanut varieties and quantities using our advanced prediction model.
        </p>
      </header>
      <main className="prediction-main">
        <div className="calculator-panel">
          <PredictionCalculator onCalculate={handleCalculate} />
        </div>
        <div className="results-panel">
          {predictionResult ? (
            <PredictionResult data={predictionResult} />
          ) : (
            <PredictionPlaceholder />
          )}
        </div>
      </main>
    </div>
  );
};

export default PredictionPage;
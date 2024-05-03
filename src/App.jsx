import React, { useState } from 'react';

function App() {
  const [principal, setPrincipal] = useState(1000);
  const [rate, setRate] = useState(10);
  const [time, setTime] = useState(5);
  const [simpleInterest, setSimpleInterest] = useState(calculateSimpleInterest(principal, rate, time));
  const [totalAmount, setTotalAmount] = useState(principal + simpleInterest);

  function calculateSimpleInterest(principal, rate, time) {
    return (principal * rate * time) / 100;
  }

  const handlePrincipal = (event) => {
    const value = parseFloat(event.target.value);
    setPrincipal(value);
    const interest = calculateSimpleInterest(value, rate, time);
    setSimpleInterest(interest);
    setTotalAmount(value + interest);
  };
  const handleRate = (event) => {
    const value = parseFloat(event.target.value);
    setRate(value);
    const interest = calculateSimpleInterest(principal, value, time);
    setSimpleInterest(interest);
    setTotalAmount(principal + interest);
  };
  const handleTime = (event) => {
    const value = parseFloat(event.target.value);
    setTime(value);
    const interest = calculateSimpleInterest(principal, rate, value);
    setSimpleInterest(interest);
    setTotalAmount(principal + interest);
  };

  return (
    <div className="bg-gray-600 min-h-screen flex justify-center items-center">
      <div className="max-w-md mx-auto bg-gray-800 text-white p-8 border rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Simple Interest Calculator</h2>
        <div className="mb-4">
          <label htmlFor="principle" className="block text-sm font-medium">Principal:</label>
          <input type="text" value={principal} onChange={handlePrincipal} className="form-input mt-1 block w-full rounded-md bg-gray-700 text-white border-gray-600 focus:border-blue-300 focus:ring focus:ring-blue-200" />
        </div>
        <div className="mb-4">
          <label htmlFor="rate" className="block text-sm font-medium">Rate:</label>
          <input type="text" value={rate} onChange={handleRate} className="form-input mt-1 block w-full rounded-md bg-gray-700 text-white border-gray-600 focus:border-blue-300 focus:ring focus:ring-blue-200" />
        </div>
        <div className="mb-4">
          <label htmlFor="time" className="block text-sm font-medium">Time:</label>
          <input type="text" value={time} onChange={handleTime} className="form-input mt-1 block w-full rounded-md bg-gray-700 text-white border-gray-600 focus:border-blue-300 focus:ring focus:ring-blue-200" />
        </div>
        <div className="text-center">
          <p className="mb-2">Simple Interest: ${simpleInterest.toFixed(2)}</p>
          <p>Total Amount: ${totalAmount.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
}

export default App;

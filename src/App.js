import { useState } from 'react';
import './App.css';

function App() {
  const [billAmount, setBillAmount] = useState('');
  const[tipPercent, setTipPercent] = useState('');
  const [numPeople, setNumPeople] = useState('1');

  const bill = parseFloat(billAmount) || 0
  const tip = parseFloat(tipPercent) || 0
  const people = parseInt(numPeople) || 1

  const tipAmount = (bill * tip) / 100;
  const totalAmount = bill + tipAmount;
  const splitAmount = totalAmount / people;

  return (
    <div className="calculator-container">
      <div className="calculator">
        <h1 className="title">Tip Calculator</h1>
        <div className="input-group">
          <label>Bill Amount</label>
          <input
            type="number"
            placeholder="Enter bill amount"
            value={billAmount}
            onChange={(e) => setBillAmount(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label>Tip Percentage</label>
          <input
            type="number"
            placeholder="Enter tip %"
            value={tipPercent}
            onChange={(e) => setTipPercent(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label>Number of People</label>
          <input
            type="number"
            placeholder="Enter number of people"
            value={numPeople}
            onChange={(e) => setNumPeople(e.target.value)}
            min="1"
          />
        </div>
      </div>

      <div className="results-container">
        <p>Tip Amount: ${tipAmount.toFixed(2)}</p>
        <p>Total Amount: ${totalAmount.toFixed(2)}</p>
        <p>Amount per Person: ${splitAmount.toFixed(2)}</p>
      </div>
    </div>
  );
}

export default App;

import { useState } from 'react';
import './App.css';

function App() {
  // total = billAmount * tipPercent / 100 = ...
  const [billAmount, setBillAmount] = useState(0)
  // continue on..
  // split = total / people
  return (
    <div className="App">
      <input 
        placeholder='Bill Amount'
        value={billAmount}
        // T-uODO: use parseInt or parseFloat to convert to number!
        onInput={(e) => setBillAmount(parseFloat(e.target.value))}
      />
      <input />
      <input />
      <div>
        {/* use .toFixed(2) to round to two decimal places */}
        <p>Bill Amount: {billAmount.toFixed(2)}</p>
        <p>Tip... total</p>
        <p>Total... split</p>
      </div>
    </div>
  );
}

export default App;

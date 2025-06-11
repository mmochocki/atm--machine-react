import React, { useState } from 'react';
import './App.scss';

function App() {
  const [balance, setBalance] = useState(1000); // Initial account balance: 1000 PLN

  return (
    <div className="atm-container">
      <div className="display">
        <h2>Account Balance:</h2>
        <div className="balance">{balance.toFixed(2)} $</div>
      </div>

      <div className="buttons">
        <button
          className="atm-button deposit"
          onClick={() => setBalance(prev => prev + 100)}
        >
          Deposit 100$
        </button>

        <button
          className="atm-button withdraw"
          onClick={() => setBalance(prev => prev - 100)}
        >
          Withdraw 100$
        </button>
      </div>
    </div>
  );
}

export default App;

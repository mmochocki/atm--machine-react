import React, { useState } from 'react';
import './App.scss';

function App() {
  const [balance, setBalance] = useState(1000); // Initial account balance: 1000 PLN
  const [amount, setAmount] = useState('');
  const [activeOperation, setActiveOperation] = useState(null); // 'deposit' or 'withdraw'

  const handleNumberClick = (number) => {
    if (amount.length < 8) { // Limit to 8 digits
      setAmount(prev => prev + number);
    }
  };

  const handleClear = () => {
    setAmount('');
  };

  const handleDelete = () => {
    setAmount(prev => prev.slice(0, -1));
  };

  const handleConfirm = () => {
    const numAmount = Number(amount);
    if (numAmount > 0) {
      if (activeOperation === 'withdraw') {
        if (numAmount <= balance) {
          setBalance(prev => prev - numAmount);
          setAmount('');
          setActiveOperation(null);
        } else {
          alert('Insufficient funds!');
        }
      } else if (activeOperation === 'deposit') {
        setBalance(prev => prev + numAmount);
        setAmount('');
        setActiveOperation(null);
      }
    }
  };

  const handleOperationClick = (operation) => {
    setActiveOperation(operation);
    setAmount('');
  };

  return (
    <div className="atm-container">
      <div className="display">
        <h2>Account Balance:</h2>
        <div className="balance">{balance.toFixed(2)} PLN</div>
        {activeOperation && (
          <div className="input-amount">
            {activeOperation === 'withdraw' ? 'Withdraw amount:' : 'Deposit amount:'}
            <div className="amount-display">{amount || '0.00'} PLN</div>
          </div>
        )}
      </div>

      <div className="operation-buttons">
        <button
          className={`atm-button deposit ${activeOperation === 'deposit' ? 'active' : ''}`}
          onClick={() => handleOperationClick('deposit')}
        >
          Deposit
        </button>
        <button
          className={`atm-button withdraw ${activeOperation === 'withdraw' ? 'active' : ''}`}
          onClick={() => handleOperationClick('withdraw')}
        >
          Withdraw
        </button>
      </div>

      {activeOperation && (
        <div className="numpad">
          <div className="numpad-grid">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(num => (
              <button
                key={num}
                className="numpad-button"
                onClick={() => handleNumberClick(num)}
              >
                {num}
              </button>
            ))}
            <button className="numpad-button" onClick={() => handleClear()}>C</button>
            <button className="numpad-button" onClick={() => handleNumberClick(0)}>0</button>
            <button className="numpad-button" onClick={() => handleDelete()}>←</button>
          </div>
          <button
            className="numpad-button confirm"
            onClick={handleConfirm}
          >
            Confirm
          </button>
        </div>
      )}
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import Display from './components/Display';
import OperationButtons from './components/OperationButtons';
import Numpad from './components/Numpad';
import './App.scss';

function App() {
  const [balance, setBalance] = useState(1000); // Initial account balance: 1000$
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
      <Display
        balance={balance}
        activeOperation={activeOperation}
        amount={amount}
      />

      <OperationButtons
        activeOperation={activeOperation}
        onOperationClick={handleOperationClick}
      />

      {activeOperation && (
        <Numpad
          onNumberClick={handleNumberClick}
          onClear={handleClear}
          onDelete={handleDelete}
          onConfirm={handleConfirm}
        />
      )}
    </div>
  );
}

export default App;

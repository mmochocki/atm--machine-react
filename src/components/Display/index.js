import React from 'react';
import './Display.scss';

const Display = ({ balance, activeOperation, amount }) => {
  return (
    <div className="display">
      <h2>Account Balance:</h2>
      <div className="balance">{balance.toFixed(2)} $</div>
      {activeOperation && (
        <div className="input-amount">
          {activeOperation === 'withdraw' ? 'Withdraw amount:' : 'Deposit amount:'}
          <div className="amount-display">{amount || '0.00'} $</div>
        </div>
      )}
    </div>
  );
};

export default Display;
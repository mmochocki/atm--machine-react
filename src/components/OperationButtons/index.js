import React from 'react';
import './OperationButtons.scss';

const OperationButtons = ({ activeOperation, onOperationClick }) => {
  return (
    <div className="operation-buttons">
      <button
        className={`atm-button deposit ${activeOperation === 'deposit' ? 'active' : ''}`}
        onClick={() => onOperationClick('deposit')}
      >
        Deposit
      </button>
      <button
        className={`atm-button withdraw ${activeOperation === 'withdraw' ? 'active' : ''}`}
        onClick={() => onOperationClick('withdraw')}
      >
        Withdraw
      </button>
    </div>
  );
};

export default OperationButtons;
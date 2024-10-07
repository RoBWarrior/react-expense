import React from 'react';

const Balance = ({ balance }) => {
  return (
    <div>
      <h4>Your Balance</h4>
      <h1>${balance.toFixed(2)}</h1>
    </div>
  );
};

export default Balance;

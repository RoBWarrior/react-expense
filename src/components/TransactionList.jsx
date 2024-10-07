import React from 'react';

const TransactionList = ({ transactions, deleteTransaction }) => {
  return (
    <div>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((transaction) => (
          <li key={transaction.id} className={transaction.amount < 0 ? 'minus' : 'plus'}>
            {transaction.description} <span>{transaction.amount < 0 ? '-' : '+'}${Math.abs(transaction.amount).toFixed(2)}</span>
            <button className="delete-btn" onClick={() => deleteTransaction(transaction.id)}>x</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;

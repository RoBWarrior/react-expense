import React, { useState } from 'react';
import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExpense from './components/IncomeExpense';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/Addtransaction';
import './App.css';

const App = () => {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  const deleteTransaction = (id) => {
    setTransactions(transactions.filter(transaction => transaction.id !== id));
  };

  const calculateBalance = () => {
    const amounts = transactions.map(transaction => transaction.amount);
    return amounts.reduce((acc, item) => (acc += item), 0);
  };

  const calculateIncome = () => {
    const amounts = transactions.filter(transaction => transaction.amount > 0).map(transaction => transaction.amount);
    return amounts.reduce((acc, item) => (acc += item), 0);
  };

  const calculateExpense = () => {
    const amounts = transactions.filter(transaction => transaction.amount < 0).map(transaction => transaction.amount);
    return amounts.reduce((acc, item) => (acc += item), 0);
  };

  return (
    <div>
      <Header />
      <div className="container">
        <Balance balance={calculateBalance()} />
        <IncomeExpense income={calculateIncome()} expense={Math.abs(calculateExpense())} />
        <TransactionList transactions={transactions} deleteTransaction={deleteTransaction} />
        <AddTransaction addTransaction={addTransaction} />
      </div>
    </div>
  );
};

export default App;

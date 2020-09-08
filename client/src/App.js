import './App.css';
import React, { useState, useEffect } from 'react';
import { NavBar } from './components/NavBar/NavBar';
import { Balance } from './components/Balance/Balance';
import { Spinner } from './components/Spinner/Spinner';
import { TransactionForm } from './components/TransactionForm/TransactionForm';
import { getTransactions, setTransaction } from './services/api.service';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [firstLoad, setFirstLoad] = useState(true);
  const [loading, setLoading] = useState(false);
  const [page, changePage] = useState('home');
  
  const [currentBalance, setCurrentBalance] = useState(0);
  const [transactions, fillTransactions] = useState(null);

  useEffect(() => {
    if (firstLoad) {
      fetchData();
    }
  }, [firstLoad]);

  const fetchData = async () => {
    setLoading(true);
    const request = await getTransactions();
    setLoading(false);

    if (!request.success) {
      toast.error('An error occurred. Please, try again.');
    } else {
      const list = request.data.data;
      setCurrentBalance(list && list.length ? list[0].balance : 0);
      fillTransactions(list)
    }

    setFirstLoad(false);
  }

  const newTransaction = async (data) => {
    setLoading(true);
    const request = await setTransaction(data);
    
    if (!request.success) {
      toast.error('An error occurred. Please, try again.');
    } else {
      await fetchData();
      changePage('home');
    }

    setLoading(false);
  }

  return (
    <>
      <NavBar page={page} onChangeRoute={(selection) => changePage(selection)} />
      <div className="container mt-4">
        {
          loading && <Spinner />
        }
          <div className="row justify-content-center">
            <div className="col-md-6">
              {
                page == 'home' && transactions && <Balance list={transactions} />
              }
              {
                page == 'new' && <TransactionForm onFormSubmit={newTransaction} currentBalance={currentBalance} onFormError={(message) => toast.error(message)} />
              }
            </div>
          </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default App;

import React, { FC } from 'react';

import './App.scss';
import MainPage from './pages/MainPage';
import { ToastContainer } from 'react-toastify';
const App: FC = () => {
    return (
        <>
            <ToastContainer autoClose={3000} />
            <MainPage />
        </>
    );
};

export default App;

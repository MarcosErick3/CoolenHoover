/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import ReactDOM from 'react-dom';
import Secao from './Secao.jsx';
import NavBar from './NavBar.jsx';
import Main from './Main.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <NavBar />
        <Main />
        <Secao />
    </React.StrictMode>,
);

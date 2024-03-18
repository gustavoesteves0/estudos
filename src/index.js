import React from 'react';
import ReactDOM from 'react-dom/client';
import './static/css/index.css';
import reportWebVitals from './reportWebVitals';
import HeaderLayout from './components/HeaderLayout';
import LoginForm from './components/formLogin';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HeaderLayout />
    <LoginForm />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

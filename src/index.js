import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { PersonCart } from './PersonCart';
import reportWebVitals from './reportWebVitals';
import { ButtonProvider } from "./page/ButtonContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <ButtonProvider>
  //   <PersonCart />
  //   </ButtonProvider>
  // </React.StrictMode>
  // <React.StrictMode>
  //   <PersonCart />
  // </React.StrictMode>
  <React.StrictMode>
    <ButtonProvider>
      <PersonCart />
    </ButtonProvider>
  </React.StrictMode>  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { CartContextProvider } from './store/cart-context';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDPK74YBZaNnjqP76aszWHl_mj-2ymEdYQ",
  authDomain: "react-zanatta.firebaseapp.com",
  projectId: "react-zanatta",
  storageBucket: "react-zanatta.appspot.com",
  messagingSenderId: "315611841561",
  appId: "1:315611841561:web:2d3d31deeaa0f385739688"
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <CartContextProvider>
      <App />
    </CartContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
